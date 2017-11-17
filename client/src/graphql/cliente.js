import graphql from './';

export function cliente(id){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
              cliente(id: `+id+`){
                id
                cedula
                nombre
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

export function clientes(){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
              clientes{
                id
                cedula
                nombre
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

export function createCliente(dat){
    return new Promise( (resolve, reject ) => {
        graphql.query(`
            mutation{
              createClienteReturned(cliente:{
                cedula : "`+ dat.cedula +`"
                nombre : "`+ dat.nombre +`"
                direccion : "`+ dat.direccion +`"
                telefono : "`+ dat.telefono +`"
                email : "`+ dat.email +`"
              }){
                id
                cedula
                nombre
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

export function updateDataCliente(origin, datNew){
    
}