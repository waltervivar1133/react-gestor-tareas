const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController')
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//crear proyectos
// api/proyectos 
router.post('/',
auth,
[
  check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
],  
proyectoController.crearProyecto
);

//obtener los proyectos
router.get('/',
auth,
proyectoController.obtenerProyectos,
);

//actualizar los proyectos
router.put('/:id', 
 auth,
 [
  check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
 ],  
 proyectoController.actualizarProyectos)

 //eliminar los proyectos
router.delete('/:id', 
auth,  
proyectoController.eliminarProyecto)

module.exports = router;