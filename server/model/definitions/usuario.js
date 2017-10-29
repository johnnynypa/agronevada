import conex from '../';
import hashPassword from '../../functions/hashPassword';

const nameTable = 'usuarios';
const nombreAtt = 'nombre';
const usuarioAtt = 'usuario';
const contraseñaAtt = 'contrasena';
const idRoleAtt = 'roles_idroles';

class Usuario{
    constructor(){
        
    }
    
    static newUser(nombre, usuario, contraseña, idRole){
        return new Promise( (resolve, reject) =>{
            hashPassword(contraseña)
            .then( (hashed) =>{
                conex( (err, con) =>{
                    con.query(
                        'INSERT INTO usuarios ('+[nombreAtt, usuarioAtt, contraseñaAtt, idRoleAtt].join(', ')+') VALUES (?, ?, ?, ?)',
                        [nombre, usuario, hashed, idRole],
                        (error, results, fields) =>{
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Error en el servidor, intentelo mas tarde");
                            }else{
                                resolve();
                            }
                        }
                    );
                })  
            })
            .catch(err =>{
                reject("Verifique su contraseña");;
            })
        });
    }
    
    static getBynameUser(nameUser){
        return new Promise( (resolve, reject) => {
            conex( (err, con) =>{
                if(err){
                    reject("Ha ocurrido un error en el servidor, intentelo mas tarde");
                }else{
                    con.query(
                        'SELECT * FROM usuarios WHERE usuario = ? LIMIT 1',
                        [nameUser],
                        (error, results, fields) => {
                            con.release();
                            if(error){
                                console.error(error);
                                reject(error);
                            }else{
                                // console.log(results[0]);
                                resolve(results[0]);
                            }
                        }
                    )
                }
            })
        })
    }
}

export default Usuario;