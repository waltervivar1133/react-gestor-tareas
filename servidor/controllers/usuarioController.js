
const Usuario = require('../models/Usuario');
const bcryptjs= require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async(req , res) => {

  // revisar si hay algun error
  const error = validationResult(req); 
  if(!error.isEmpty()){
    return res.status(400).json({ error : error.array()})
  }
  const { email, password} = req.body;

  
  try {
    let usuario = await Usuario.findOne({ email });

    if( usuario ) {
      return res.status(400).json({ msg: 'El usuario ya existe' })
    }

    //crea el nuevo usuario
    usuario = new Usuario(req.body);
     
    //hashear el password

    const salt = await bcryptjs.genSalt(10);

    usuario.password = await bcryptjs.hash( password, salt)

    // guarda el nuevo usuario
    await usuario.save();


    // crear el jwt

    const payload = {
      usuario : {
        id : usuario.id
      }
    }

    // Firmar el jwt
    jwt.sign(payload, process.env.SECRETA, {
      expiresIn: 3600
    }, (error, token) => {
      if(error) throw error;

      // mensaje de confirmacion

      res.json({token});

    });


    
  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un error')
  }
}