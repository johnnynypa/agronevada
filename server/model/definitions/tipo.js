import conex from '../';

const atributos = [
        'idTipoCafe as id',
        'descripcion',
        'precioKg',
        'bonificacion'
    ];
    
const FIELDS = [
        'descripcion',
        'precioKg',
        'bonificacion'
    ]

class Tipo{
    
    static newTipo(type){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO tipoCafe ('+FIELDS.join(', ')+') VALUES (?, ?, ?)',
                        [type.descripcion, type.precioKg, type.bonificacion],
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
                        'SELECT '+atributos.join(', ')+' FROM tipoCafe',
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
        }
    )}
    
    /**
     * @param id : Int;
     **/
    static getById(id){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'SELECT '+atributos.join(', ')+' FROM tipoCafe WHERE idTipoCafe = ? LIMIT 1',
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
        }
    )}
    
    static updateSetDescripcion(id, descripcion){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE tipoCafe SET descripcion = ?  WHERE idTipoCafe = ?',
                        [descripcion, id],
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
    
    static updateSetPrecioKg(id, precioKg){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE tipoCafe SET precioKg = ?  WHERE idTipoCafe = ?',
                        [precioKg, id],
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
    
    static updateSetBonificacion(id, bonificacion){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE tipoCafe SET bonificacion = ?  WHERE idTipoCafe = ?',
                        [bonificacion, id],
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

export default Tipo;