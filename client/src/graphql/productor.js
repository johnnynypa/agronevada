import graphql from './';

export function productor(id){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
                productor(id: `+id+`){
                    id
                    nombreFinca
                    nombreGerente
                    direccion
                    telefono
                    email
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

export function productores(){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
                productores{
                    id
                    nombreFinca
                    nombreGerente
                    direccion
                    telefono
                    email
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