import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'dos-config';
import User from '../model/definitions/usuario';

let router = express.Router();

//Login Middleware
router.post('/', (req, res) => {
    const { username, password } = req.body;
    verificarCredenciales(username, password)
    .then(data =>{
        res.json({
            id : data.idUsuario,
            nombre : data.nombre,
            idRole : data.roles_idroles
        }, config.jwtSecret);
    })
    .catch(err => {res.json(err)}); //Error
})

/**
 * @function verificarCredenciales
 * @param us : String {Nombre de usuario}
 * @param psw : String {Contraseña}
 * @return Promise(resolve{Bool})
 * */
function verificarCredenciales(us, psw){
    return new Promise( (resolve, reject) =>{
        User.getBynameUser(us)
        .then( (data) =>{
            if(data){ //Si si existe un usuario con el nombre de usuario insertado
                if(bcrypt.compare(psw, data.contrasena) ){//Comparamos
                    resolve(data);
                } 
            }else{
                reject({error: "Credenciales incorrectas"});
            }
        })
        .catch( err =>{
            reject({error: "Ha ocurrido un error, intentelo mas tarde"});
        });
    });
}


