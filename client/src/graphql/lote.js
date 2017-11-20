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
                salidas{
                  id
                }
                ajustes{
                  id
                }
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

export function createLote(lote){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            mutation{
              createLoteReturned(lote:{
                idProductor : `+ lote.idProductor +`
                idConductor : `+ lote.idConductor +`
                idSecado : `+ lote.idSecado +`
                idTipo : `+ lote.idTipo +`
                fecha : `+ lote.fecha +`
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