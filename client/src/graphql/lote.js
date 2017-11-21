import graphql from './';

export function lotes(){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
              lotes{
                id
                productor{
                  nombreFinca
                }
                secado{
                  descripcion
                }
                tipo{
                  descripcion
                }
                saldo
              }
            }
        `,
        function(req, res) {
            if(res.status === 401) {
                throw new Error('Not authorized')
            }
        })
        .then(function(body) {
            resolve(body)
        })
        .catch(function(err) {
            reject(err.message)
        })
    })
}

export function lote(id){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
              lote(id: `+id+`){
                id
                conductor{
                  nombre
                }
                productor{
                  nombreFinca
                }
                secado{
                  descripcion
                }
                tipo{
                  descripcion
                }
                fecha
                cantidadKg
                factorRendimiento
                humedad
                pruebaTaza
                precioBase
                saldo
                descuento
                retefuente
                bonificacion
              }
            }
        `,
        function(req, res) {
            if(res.status === 401) {
                throw new Error('Not authorized')
            }
        })
        .then(function(body) {
            resolve(body)
        })
        .catch(function(err) {
            reject(err.message)
        })
    })
}

function converDate(date){
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function createLote(lote){
    return new Promise( (resolve, reject) => {
      console.log( JSON.stringify(lote));
        graphql.query(`
            mutation{
              createLoteReturned(lote:{
                idProductor : `+ lote.productorSelected.value +`
                idConductor : `+ lote.conductorSelected.value +`
                idSecado : `+ lote.secadoSelected.value +`
                idTipo : `+ lote.tipoSelected.value +`
                fecha : "`+ converDate(lote.fecha) +`"
                cantidadKg : `+ lote.cantidadKg +`
                factorRendimiento : `+ lote.factorRendimiento +`
                humedad : `+ lote.humedad +`
                pruebaTaza : `+ lote.pruebaTaza +`
                precioBase : `+ lote.precioBase +`
                saldo : `+ lote.cantidadKg +`
                descuento : `+ lote.descuento +`
                retefuente : `+ lote.retefuente +`
                bonificacion : `+ lote.bonificacion +`
              }){
                id
                conductor{
                  nombre
                }
                productor{
                  nombreFinca
                }
                secado{
                  descripcion
                }
                tipo{
                  descripcion
                }
                fecha
                cantidadKg
                factorRendimiento
                humedad
                pruebaTaza
                precioBase
                saldo
                descuento
                retefuente
                bonificacion
              }
            }
        `,
        function(req, res) {
            if(res.status === 401) {
                throw new Error('Not authorized')
            }
        })
        .then(function(body) {
            resolve(body)
        })
        .catch(function(err) {
            reject(err.message)
        })
    })
}

