import graphql from './';

export function conductor(id){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
                conductor(id: `+id+`){
                    id
                    nombre
                    telefono
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

export function conductores(){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
                conductores{
                    id
                    nombre
                    telefono
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

export function createConductor(dat){
    return new Promise( (resolve, reject ) => {
        graphql.query(`
            mutation{
              createConductorReturned(conductor:{
                nombre :"`+dat.nombre+`"
                telefono :"`+dat.telefono+`"
              }){
                id
                nombre
                telefono
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