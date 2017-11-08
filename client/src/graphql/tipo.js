import graphql from './';

export function tipo(id){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
              tipo(id : `+id+`){
                id
                descripcion
                precioKg
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

export function tipos(){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
              tipos{
                id
                descripcion
                precioKg
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