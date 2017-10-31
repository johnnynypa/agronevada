import conex from '../';

const ATRIBUTOS = [
	'idLote as id',
	'productores_id as idProductor',
	'conductores_id as idConductor',
	'tipoCafe_idTipoCafe as idTipo',
	'tipoSecado_idTipoSecado as idSecado',
	'fecha',
	'cantidadKg',
	'factorRendimiento',
	'humedad',
	'pruebaTaza',
	'precioBase',
	'saldo',
	'descuento',
	'retefuente',
	'lotes.bonificacion'
];

const ATRIBUTOS_PRODUCTORES = [
	'productores.nombreFinca as nombreFincaProductor',
	'productores.nombreGerente as nombreGerenteProductor',
	'productores.direccion as direccionProductor',
	'productores.email as emailProductor',
	'productores.telefono as telefonoProductor'
];

const ATRIBUTOS_CONDUCTORES = [
	'conductores.nombre as nombreConductor',
	'conductores.telefono as telefonoConductor'
];

const ATRIBUTOS_TIPOCAFE = [
	'tipoCafe.descripcion as descripcionTipoCafe',
	'tipoCafe.precioKg as precioKgTipoCafe',
	'tipoCafe.bonificacion as bonificacionTipoCafe'
];

const ATRIBUTOS_TIPOSECADO = [
	'tipoSecado.descripcion as descripcionTipoSecado',
];

const FIELDS = [
	'productores_id',
	'conductores_id',
	'tipoCafe_idTipoCafe',
	'tipoSecado_idTipoSecado',
	'fecha',
	'cantidadKg',
	'factorRendimiento',
	'humedad',
	'pruebaTaza',
	'precioBase',
	'saldo',
	'descuento',
	'retefuente',
	'bonificacion'
]

class Lote {
    
  static newLote(data){
    return new Promise( (resolve, reject) =>{
      conex( (err, con) =>{
        if(err){
          console.log(err);
          reject("Ha ocurrido un error, intentelo mas tarde.");
        }else{
          con.query(
            'INSERT INTO lotes ('+FIELDS.join(', ')+') VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
            	data.idProductor,
            	data.idConductor,
            	data.idTipo,
            	data.idSecado,
            	data.fecha,
            	data.cantidadKg,
            	data.factorRendimiento,
            	data.humedad,
            	data.pruebaTaza,
            	data.precioBase,
            	data.saldo,
            	data.descuento,
            	data.retefuente,
            	data.bonificacion
            ],
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
    
  static updateLote(id, data){
      
  }
  
  static getAlls(){
  	return new Promise( (resolve, reject) =>{
        conex( (err, con) =>{
            if(err){
                console.log(err);
                reject("Ha ocurrido un error, intentelo mas tarde.");
            }else{
                con.query(
                    'SELECT '+ATRIBUTOS.join(', ')+','+ATRIBUTOS_PRODUCTORES.join(', ')+','+ATRIBUTOS_CONDUCTORES.join(', ')+','+ATRIBUTOS_TIPOCAFE.join(', ')+','+ATRIBUTOS_TIPOSECADO.join(', ')+'  FROM lotes INNER JOIN productores ON (lotes.productores_id = productores.idProductor) INNER JOIN conductores ON(lotes.conductores_id = conductores.idConductor) INNER JOIN tipoCafe ON (lotes.tipoCafe_idTipoCafe = tipoCafe.idTipoCafe) INNER JOIN tipoSecado ON (lotes.tipoSecado_idTipoSecado = tipoSecado.idTipoSecado)',
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
  
  static getAllsWithAJustes(){
  	return new Promise( (resolve, reject) =>{
        conex( (err, con) =>{
            if(err){
                console.log(err);
                reject("Ha ocurrido un error, intentelo mas tarde.");
            }else{
                con.query(
                    'SELECT '+ATRIBUTOS.join(', ')+' FROM lotes INNER JOIN ON(lotes.idLote = ajustes.llegadas_id)',
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
  
  static getAllsByTipoAndSecado(idTipo, idSecado){
  	return new Promise( (resolve, reject) =>{
        conex( (err, con) =>{
            if(err){
                console.log(err);
                reject("Ha ocurrido un error, intentelo mas tarde.");
            }else{
                con.query(
                    'SELECT '+ATRIBUTOS.join(', ')+' FROM lotes WHERE (tipoCafe_idTipoCafe = ? AND tipoSecado_idTipoSecado = ?)',
                    [idTipo, idSecado],
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
                    'SELECT '+ATRIBUTOS.join(', ')+','+ATRIBUTOS_PRODUCTORES.join(', ')+','+ATRIBUTOS_CONDUCTORES.join(', ')+','+ATRIBUTOS_TIPOCAFE.join(', ')+','+ATRIBUTOS_TIPOSECADO.join(', ')+'   FROM lotes INNER JOIN productores ON (lotes.productores_id = productores.idProductor) INNER JOIN conductores ON(lotes.conductores_id = conductores.idConductor) INNER JOIN tipoCafe ON (lotes.tipoCafe_idTipoCafe = tipoCafe.idTipoCafe) INNER JOIN tipoSecado ON (lotes.tipoSecado_idTipoSecado = tipoSecado.idTipoSecado) WHERE (idLote = ?) LIMIT 1',
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
  
  static getByTipo(idTipo){
      return new Promise( (resolve, reject) =>{
        conex( (err, con) =>{
            if(err){
                console.log(err);
                reject("Ha ocurrido un error, intentelo mas tarde.");
            }else{
                con.query(
                    'SELECT '+ATRIBUTOS.join(', ')+','+ATRIBUTOS_PRODUCTORES.join(', ')+','+ATRIBUTOS_CONDUCTORES.join(', ')+','+ATRIBUTOS_TIPOCAFE.join(', ')+','+ATRIBUTOS_TIPOSECADO.join(', ')+'  FROM lotes INNER JOIN productores ON (lotes.productores_id = productores.idProductor) INNER JOIN conductores ON(lotes.conductores_id = conductores.idConductor) INNER JOIN tipoCafe ON (lotes.tipoCafe_idTipoCafe = tipoCafe.idTipoCafe) INNER JOIN tipoSecado ON (lotes.tipoSecado_idTipoSecado = tipoSecado.idTipoSecado) WHERE (tipoCafe_idTipoCafe = ?)',
                    [idTipo],
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
  
  static getBySecado(idSecado){
      return new Promise( (resolve, reject) =>{
        conex( (err, con) =>{
            if(err){
                console.log(err);
                reject("Ha ocurrido un error, intentelo mas tarde.");
            }else{
                con.query(
                    'SELECT '+ATRIBUTOS.join(', ')+','+ATRIBUTOS_PRODUCTORES.join(', ')+','+ATRIBUTOS_CONDUCTORES.join(', ')+','+ATRIBUTOS_TIPOCAFE.join(', ')+','+ATRIBUTOS_TIPOSECADO.join(', ')+'  FROM lotes INNER JOIN productores ON (lotes.productores_id = productores.idProductor) INNER JOIN conductores ON(lotes.conductores_id = conductores.idConductor) INNER JOIN tipoCafe ON (lotes.tipoCafe_idTipoCafe = tipoCafe.idTipoCafe) INNER JOIN tipoSecado ON (lotes.tipoSecado_idTipoSecado = tipoSecado.idTipoSecado) WHERE (tipoSecado_idTipoSecado = ?)',
                    [idSecado],
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

export default Lote;