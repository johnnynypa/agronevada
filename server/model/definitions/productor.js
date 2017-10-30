import conex from '../';

const atributos = [
    'idProductor as id',
    'nombreFinca',
    'nombreGerente',
    'direccion',
    'telefono',
    'email'
    ]

class Productor {
    /**
     * @param id : Int
     * */
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
}

export default Productor;