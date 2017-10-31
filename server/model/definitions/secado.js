import conex from '../';

const ATRIBUTOS = [
        'idTipoSecado as id',
        'descripcion'
    ];
    
const FIELDS = [
        'descripcion'
    ]

class Secado{
    
    static newSecado(sec){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO tipoSecado ('+FIELDS[0]+') VALUES (?)',
                        [sec.descripcion],
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
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM tipoSecado',
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
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM tipoSecado WHERE idTipoSecado = ? LIMIT 1',
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
}

export default Secado;