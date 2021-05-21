const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator')
exports.crearProyecto = async ( req, res) => {

  
  // revisar si hay algun error
  const error = validationResult(req); 
    if(!error.isEmpty()){
      return res.status(400).json({ error : error.array()})
    }

  try {

    const proyecto = new Proyecto(req.body);

    //guardar creador jwt
    proyecto.creador = req.usuario.id;

    //guardamos el proyecto 
    proyecto.save();
    res.json(proyecto)

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error')
  }
}

// obtiene todos los proyectos actuales

exports.obtenerProyectos = async (req,res) => {

  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id})
    res.json({proyectos})
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  } 

}

//actualizar proyectos
exports.actualizarProyectos = async(req,res) => {

    
  // revisar si hay algun error
    const error = validationResult(req); 
    if(!error.isEmpty()){
      return res.status(400).json({ error : error.array()})
    }


    //extraer la informacion del proyecto

    const { nombre } = req.body;
    const nuevoProyecto = {};

    if(nombre) {
      nuevoProyecto.nombre = nombre;
    }

    try {
      //revisar el id
      let proyecto = await Proyecto.findById(req.params.id);

      //si el proyecto existe o no
      if(!proyecto) {
        return res.status(404).json({ msg: 'proyecto no encontrado'})
      }
      // verificar el creador del proyecto
      if (proyecto.creador.toString() !== req.usuario.id) {
        return res.status(404).json({ msg: ' No autorizado'})
      }

      //actualizar
      
       let proyectoUpdate = await Proyecto.findByIdAndUpdate({ _id: req.params.id}, { $set: nuevoProyecto}, { new: true})

      res.json({proyectoUpdate})


    } catch (error) {
      console.log(error);
      res.status(500).send({msg: 'error en el servidor'})
    }

}

// eliminar un proyecto

exports.eliminarProyecto = async(req,res) =>{

try {
  
   //revisar el id
   let proyecto = await Proyecto.findById(req.params.id);

   //si el proyecto existe o no
   if(!proyecto) {
     return res.status(404).json({ msg: 'proyecto no encontrado'})
   }
   // verificar el creador del proyecto
   if (proyecto.creador.toString() !== req.usuario.id) {
     return res.status(404).json({ msg: ' No autorizado'})
   }

   //eliminar proyecto

   await Proyecto.findOneAndRemove({ _id : req.params.id })
   res.json({ msg: 'Proyecto Eliminado'})

 
} catch (error) {
  console.log(error);
  res.status(500).send({msg: 'error en el servidor'})
}
  
}