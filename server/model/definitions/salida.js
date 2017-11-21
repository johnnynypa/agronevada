import conex from '../';
import Lote from './lote';

const ATRIBUTOS = [
    'idSalida as id',
    'direccionDespacho',
    'fecha',
    'clientes_id as idCliente'
];

const FIELDS = [
    'direccionDespacho',
    'fecha',
    'clientes_id'
]

const ATRIBUTOSDETALLES = [
    'id AS idDetalle',
    'lotes_idLote AS idLote',
    'salidas_idSalida AS idSalida',
    'cantidad AS cantidadKg '
]

const FIELDSDETALLES = [
    'lotes_idLote',
    'salidas_idSalida',
    'cantidad'
]

/**
 * @param detalles : newDetalleSalida
 * @return [DetalleSalida]
 */

class Salida{
    
    static regDetalles(detalles, idSalida){
        if(detalles && idSalida){
            for (let detail of detalles){
                this.newDetalleSalida(detail.idLote, idSalida, detail.cantidadKg);
            }
        }
    }
    
    static newSalida(data){
        return new Promise( async (resolve, reject) => {
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO salidas ('+FIELDS.join(', ')+') VALUES (?, ?, ?)',
                        [data.direccionDespacho, data.fecha, data.idCliente],
                        (error, results, fields) =>{
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                data.id = results.insertId;
                                this.regDetalles(data.detalles, results.insertId);
                                resolve(results.insertId);
                            }
                        }
                    )
                }
            })
        })
    }
    
    /**
     * @param idLote : Int
     * @param idSalida : Int
     * @param cantidadKg : Float
     * @return {id, idLote, idSalida, cantidadKg}
     */
    static newDetalleSalida(idLote, idSalida, cantidadKg){
        return new Promise( async (resolve, reject) => {
            conex( (err, con) =>{
                if(err){
                    console.log(err);
                    reject("Ha ocurrido un error, intentelo mas tarde.");
                }else{
                    con.query(
                        'INSERT INTO lotes_has_salidas ('+FIELDSDETALLES.join(', ')+') VALUES (?, ?, ?)',
                        [idLote, idSalida, cantidadKg],
                        (error, results, fields) =>{
                            con.release();
                            if(error){
                                console.log(error);
                                reject("Ha ocurrido un error, intentelo mas tarde.");
                            }else{
                                Lote.restarAlSaldo(cantidadKg, idLote);
                                resolve({
                                    id : results.insertId,
                                    idLote : idLote,
                                    idSalida : idSalida,
                                    cantidadKg : cantidadKg
                                });
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
                    'SELECT '+ATRIBUTOS.join(', ')+' FROM salidas WHERE (idSalida = ?) LIMIT 1',
                    [id],
                    (error, results) => {
                        con.release();
                        if(error){
                            console.error(error);
                            reject(error);
                        }else{
                            if(results){
                            	console.log(results);
                              resolve(results[0]);
                            }else
                                resolve(null);
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
                        'SELECT '+ATRIBUTOS.join(', ')+' FROM salidas ',
                        (error, results) => {
                            con.release();
                            if(error){
                                console.error(error);
                                reject(error);
                            }else{
                                if(results){
                                    console.log(results);
                                    resolve(results);
                                }else
                                    resolve(null);
                            }
                        }
                    )
                }
            })
        })
    }
}


export default Salida;