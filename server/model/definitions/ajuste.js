import conex from '../';

const ATRIBUTOS = [
    'idAjuste as id',
    'descripcion',
    'fecha',
    'cantidadKg',
    'llegadas_id as idLote'
];

const FIELDS = [
    'descripcion',
    'fecha',
    'cantidadKg',
    'llegadas_id'
];

class Ajuste{
    static newAjuste(dat){
        return new Promise( (resolve, reject) => {
            conex( (err, con) => {
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO ajustes ('+FIELDS.join(', ')+') VALUES (?, ?, ?, ?)',
                        [dat.descripcion, dat.fecha, dat.cantidadKg, dat.idLote],
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
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM ajustes',
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
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM ajustes WHERE (idAjuste = ?) LIMIT 1',
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
    
    static getAllsByIdLote(idLote){
        return new Promise( (resolve, reject) =>{
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM ajustes WHERE (llegadas_id = ?)',
                        [idLote],
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
    
    
}

export default Ajuste;