import graphql from './';

export function salidasWithCliente(){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
              salidas{
                id
                fecha
                direccionDespacho
                cliente {
                  id
                  nombre
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

export function createSalida(dat){
    return new Promise( (resolve, reject) => {
        let details = dat.detalles.map( (current) => {
            return `{
                idLote: `+current.idLote+`
                cantidadKg: `+current.cantidadKg+`
            }`
        })
        graphql.query(`
            mutation{
              createSalidaReturned(salida:{
                direccionDespacho : "`+dat.direccionDespacho+`"
                fecha : "`+dat.fecha+`"
                idCliente : `+dat.idCliente+`
                detalles:[ `+details.join(', ') +` ]
              }){
                id
                direccionDespacho
                fecha
                cliente{
                  nombre
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