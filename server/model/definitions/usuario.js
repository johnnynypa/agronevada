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
}

export default Usuario;