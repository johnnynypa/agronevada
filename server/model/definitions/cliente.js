import conex from '../';

const ATRIBUTOS = [
    'idCliente as id',
    'nombre',
    'direccion',
    'telefono',
    'email',
    'cedula'
];

const FIELDS = [
    'nombre',
    'direccion',
    'telefono',
    'email',
    'cedula'
];

class Cliente{
    static newCliente(dat){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO clientes ('+FIELDS.join(', ')+') VALUES (?, ?, ?, ?, ?)',
                        [dat.nombre, dat.direccion, dat.telefono, dat.email, dat.cedula],
                        (error, results, fields) =>{
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                resolve(results.insertId);
                            }
                        }
                    )
                }
            })
        })
    }
    
    static getAlls(){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM clientes',
                        (error, results) => {
                            con.release();
                            if(error){
                                console.error(error);
                                reject(error);
                            }else{
                                if(results)
                                    resolve(results);
                                else
                                    resolve(null);
                            }
                        }
                    )
                }
            })
        })
    }
    
    static getById(id){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM clientes WHERE (idCliente = ?) LIMIT 1',
                        [id],
                        (error, results) => {
                            con.release();
                            if(error){
                                console.error(error);
                                reject(error);
                            }else{
                                if(results)
                                    resolve(results[0]);
                                else
                                    resolve(null);
                            }
                        }
                    )
                }
            })
        })
    }
    
    static getByCedula(cc){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM clientes WHERE (cedula = ?) LIMIT 1',
                        [cc],
                        (error, results) => {
                            con.release();
                            if(error){
                                console.error(error);
                                reject(error);
                            }else{
                                if(results)
                                    resolve(results[0]);
                                else
                                    resolve(null);
                            }
                        }
                    )
                }
            })
        })
    }
}

export default Cliente;