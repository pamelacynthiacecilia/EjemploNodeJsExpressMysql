import express from 'express'
//import conex from './src/mysql_conex.js'
import bodyParser from 'body-parser';
import Usuario from './src/modelos/model_usuario.js'

const app = express() // desde acá podemos llamar a todos los metodos que necesitemos de express
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.listen('4000', function(){
    console.log('La aplicación se inicio en el puerto 4000')
})


//configuración de pug
app.set('views','./view')
app.set('view engine', 'pug')


//configuración de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./src/modelos'))
app.use(express.static('./public/css'))
app.use(express.static('./public/js'))


//rutas 

// get renderiza a vista formulario
app.get('/', function(req, res){
    res.render('usuario.pug')
    })

// post recibe los datos del formulario
app.post('/crearUsuario', function(req, res){
      const nombre= req.body.nombre;
        const email= req.body.email;
        const mensaje= req.body.mensaje;

    //llama al modelo usuario metodo crearUsuario
     const usuario= Usuario.crearUsuario(nombre, email, mensaje)

    const respuesta= {
        titulo: "SE CREO UN NUEVO USUARIO EN LA BASE DE DATOS: ",
        usuario:{
            nombre: nombre, 
            email: email, 
            mensaje: mensaje  
        }
    }
        res.json(respuesta)
        
       // res.render('usuario.pug')
        })