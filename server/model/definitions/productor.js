import conex from '../';

const atributos = [
        'idProductor as id',
        'nombreFinca',
        'nombreGerente',
        'direccion',
        'telefono',
        'email'
    ];
    
const FIELDS = [
        'nombreFinca',
        'nombreGerente',
        'direccion',
        'telefono',
        'email'
    ]
class Productor {
    
    static newProductor(data){
        return new Promise( (resolve, reject) => {
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO productores ('+FIELDS.join(', ')+') VALUES (?, ?, ?, ?, ?)',
                        [data.nombreFinca , data.nombreGerente, data.direccion, data.telefono, data.email],
                        (error, results) =>{
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
    
    /**
     * @param id : Int
     **/
    static getById(id){
        return new Promise( (resolve , reject) => {
            conex( (err, con) => {
                if(err){
                    reject("Ha ocurrido un error en el servidor, intentelo mas tarde");
                }else{
                    con.query(
                        'SELECT '+ atributos.join(', ') +' FROM productores WHERE id = ? LIMIT 1',
                        [id],
                        (error, results, fields) =>{
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
    
    static getAlls(){
        return new Promise( (resolve , reject) => {
            conex( (err, con) => {
                if(err){
                    reject("Ha ocurrido un error en el servidor, intentelo mas tarde");
                }else{
                    con.query(
                        'SELECT '+ atributos.join(', ') +' FROM productores',
                        (error, results, fields) =>{
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
    
    static updateSetNombreFinca(id, nombreFinca){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE productores SET nombreFinca = ?  WHERE idProductor = ?',
                        [nombreFinca, id],
                        (error, results) => {
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                resolve(true);
                            }
                        }
                    )
                }
            })
        })
    }
    
    static updateSetNombreGerente(id, nombreGerente){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE productores SET nombreGerente = ?  WHERE idProductor = ?',
                        [nombreGerente, id],
                        (error, results) => {
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                resolve(true);
                            }
                        }
                    )
                }
            })
        })
    }
    
    static updateSetNombreTelefono(id, telefono){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE productores SET telefono = ?  WHERE idProductor = ?',
                        [telefono, id],
                        (error, results) => {
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                resolve(true);
                            }
                        }
                    )
                }
            })
        })
    }
    
    static updateSetNombreDireccion(id, direccion){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE productores SET direccion = ?  WHERE idProductor = ?',
                        [direccion, id],
                        (error, results) => {
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                resolve(true);
                            }
                        }
                    )
                }
            })
        })
    }
    
    static updateSetNombreEmail(id, email){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE productores SET email = ?  WHERE idProductor = ?',
                        [email, id],
                        (error, results) => {
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                resolve(true);
                            }
                        }
                    )
                }
            })
        })
    }
}

export default Productor;