//Prueba de aplicacion
//asignacones
const express=require('express');
const aplicacion=express();
const mongoose=require('mongoose');

const router=express.Router();
//aplicacion.use(express.urlencoded({extended:true}));

const TareaSchwma=require('./Modelos/Tarea.js');

//crud
//get para consultar
router.get('Tarea',(req,res)=>{
    
    res.send("Prueba de get en la pagina");
})


aplicacion.use(express.urlencoded({
    extended:true
}));

aplicacion.use(express.json());

aplicacion.use(router);


//cadena de conexion
mongoose.connect("aqui va enlace de conexion de Mongo web");

//escucha del servidor web
aplicacion.listen(3000,()=>{
    console.log("servidor web iniciado");
});