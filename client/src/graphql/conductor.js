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
    return new Promise( (resolve, reject) => {
        Promise.all([
            setNombre(datOrigin.id, datOrigin.nombre, datNew.nombre),
            setTelefono(datOrigin.id, datOrigin.telefono, datNew.telefono)
        ])
        .then( () => {resolve();} )
        .catch( () => { reject("Ha ocurrido un error, recargue la pagina y verifique la informacion") })
    })
}

function setNombre(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew){
            graphql.query(
            `
                mutation{
                    conductorSetNombre( idConductor:`+id+`, nombre: "`+datNew+`")
                }
            `,
            err => {
                console.log(err);
                if(!err)
                    res();
                else
                    rej();
            }
            )
        }else{
            res();
        }
    })
}

function setTelefono(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew){
            graphql.query(
            `
                mutation{
                    conductorSetTelefono( idConductor:`+id+`, telefono: "`+datNew+`")
                }
            `,
            err => {
                console.log(err);
                if(!err)
                    res();
                else
                    rej();
            }
            )
        }else{
            res();
        }
    })
}