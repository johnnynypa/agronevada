import conex from '../';


const ATRIBUTOS = [
        'idConductor as id',
        'nombre',
        'telefono'
    ];
    
const FIELDS = [
        'nombre',
        'telefono'
    ]

class Conductor{
    
    static newConductor(conduc){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO conductores ('+FIELDS.join(', ')+') VALUES (?, ?)',
                        [conduc.nombre, conduc.telefono],
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
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM conductores',
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
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM conductores WHERE idConductor = ? LIMIT 1',
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
    
    static updateSetNombre(id, nombre){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE conductores SET nombre = ?  WHERE idConductor = ?',
                        [nombre, id],
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
    
    static updateSetTelefono(id, telefono){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'UPDATE conductores SET telefono = ?  WHERE idConductor = ?',
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
}

export default Conductor;