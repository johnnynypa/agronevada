import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'dos-config';

let router = express.Router();

//Login Middleware
router.post('/', (req, res) => {
    const { username, password } = req.body;
})

/**
 * @function verificarCredenciales
 * @param us : String {Nombre de usuario}
 * @param psw : String {Contraseña}
 * @return Promise(resolve{Bool})
 * */
function verificarCredenciales(us, psw){
    return new Promise( (resolve, reject) =>{
        
    });
}