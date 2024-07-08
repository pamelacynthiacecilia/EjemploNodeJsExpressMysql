// mysql_conex.js

import mysql from 'mysql';

// Configuración de la conexión a MySQL
const conex = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'test'
});

// Establecer la conexión (opcionalmente)
conex.connect(error => {
    if (error) {
        console.error('Error al conectar a MySQL: ', error);
        throw error;
    }
    console.log('Conectado a MySQL');
});

export default conex;