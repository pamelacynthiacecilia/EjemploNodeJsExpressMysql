import conex from '../mysql_conex.js';

export default class  Usuario{

static async crearUsuario(nombre, email, mensaje) {
    return new Promise((resolve, reject) => {

     const sql = `INSERT INTO usuarios(nombre,correo,mensaje) VALUES('${nombre}','${email}','${mensaje}')`;
             conex.query(sql, function (err, result){
         if (err) {
             reject(err);
         } else {
             resolve(result);
         }
     });
 });
 }
}