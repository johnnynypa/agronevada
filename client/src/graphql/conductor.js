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

export function updateDataConductor(datOrigin, datNew){
    return new Promise( async (resolve, reject) => {
        let errrrr = false;
        if(datOrigin.nombre =! datNew.nombre ){
            await graphql.query(
                `
                mutation:{
                    conductorSetNombre( `+datOrigin.id+`, `+datNew.nombre+`)
                }
                `,
                (err, response) => {
                    errrrr = (err) ? true : false;
                }
            )
        }
        if(datOrigin.telefono =! datNew.telefono ){
            await graphql.query(
                `
                mutation:{
                    conductorSetTelefono( `+datOrigin.id+`, `+datNew.telefono+`)
                }
                `,
                (err, response) => {
                    errrrr = (err) ? true : false;
                }
            )
        }
        if(errrrr){
            reject();
        }else{
            resolve();
        }
    })
}