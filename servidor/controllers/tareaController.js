const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator')

exports.crearTarea = async (req,res) => {
      
  // revisar si hay algun error
  const error = validationResult(req); 
  if(!error.isEmpty()){
    return res.status(400).json({ error : error.array()})
  }
  
  try {
    //extraer el proyecto y comprobar si existe
    const { proyecto } = req.body;
    const existeProyecto = await Proyecto.findById(proyecto)
    if(!existeProyecto) {
      return res.status(400).json({ msg: 'Proyecto no encontrado'});
    }

    // verificar el creador del proyecto
    if (existeProyecto.creador.toString() !== req.usuario.id) {
    return res.status(404).json({ msg: ' No autorizado'})
  }
  //crear la tarea 

    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({ tarea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg : 'hubo un error'})
  }
}

exports.obtenerTareas = async (req,res) => {
  try {
      //extraer el proyecto y comprobar si existe
      const { proyecto } = req.body;
      const existeProyecto = await Proyecto.findById(proyecto)
      if(!existeProyecto) {
        return res.status(400).json({ msg: 'Proyecto no encontrado'});
      }
  
      // verificar el creador del proyecto
      if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(404).json({ msg: ' No autorizado'})
    }
    const tareas = await Tarea.find({ proyecto})
    res.json({ tareas})

  } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error')
  }
}


exports.actualizarTarea = async ( req, res) => {

  try {

    //extraer el proyecto y comprobar si existe
    const { proyecto, nombre, estado } = req.body;
    
    // si la  tarea existe

    let tarea = await Tarea.findById(req.params.id);

    if(!tarea){
      return res.status(400).json({ msg : ' NO existe la tarea'})
    }
    // extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto)
 

    // verificar el creador del proyecto
    if (existeProyecto.creador.toString() !== req.usuario.id) {
    return res.status(404).json({ msg: ' No autorizado'})
  }

  // crear un objeto con la nueva informacion

  const nuevaTarea = {};

  if(nombre){
    nuevaTarea.nombre = nombre;
  }
  if( estado){
    nuevaTarea.estado = estado;
  }

  // guardar la tarea

   tarea = await Tarea.findByIdAndUpdate({ _id : req.params.id}, nuevaTarea , { new : true});

  res.json({ tarea})
    
  } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error')
  }
}

exports.eliminarTarea = async (req,res) => {

  try {

    //extraer el proyecto y comprobar si existe
    const { proyecto} = req.body;
    
    // si la  tarea existe

    let tarea = await Tarea.findById(req.params.id);

    if(!tarea){
      return res.status(400).json({ msg : ' NO existe la tarea'})
    }
    // extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto)
 

    // verificar el creador del proyecto
    if (existeProyecto.creador.toString() !== req.usuario.id) {
    return res.status(404).json({ msg: ' No autorizado'})
  }

  //eliminar tarea
  
  await Tarea.findByIdAndRemove({ _id: req.params.id});
  res.json({msg: 'Tarea eliminada' })
  } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error')
  }
}

