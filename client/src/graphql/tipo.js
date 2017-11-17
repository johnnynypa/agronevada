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

export function createTipo(dat){
    return new Promise( (resolve, reject ) => {
        graphql.query(`
            mutation{
              createTipoReturned(tipo:{
                descripcion : "`+dat.descripcion+`"
                precioKg : `+dat.precioKg+`
                bonificacion : `+dat.bonificacion+`
              }){
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

export function updateDataTipo(datOrigin, datNew){
    console.log("Los originales son: " + JSON.stringify(datOrigin));
    console.log("Los nuevos son: " + JSON.stringify(datNew));
    return new Promise( (resolve, reject) => {
        Promise.all([
            setDescripcion(datOrigin.id, datOrigin.descripcion, datNew.descripcion),
            setPrecioKg(datOrigin.id, datOrigin.precioKg, datNew.precioKg ),
            setBonificacion( datOrigin.id, datOrigin.bonificacion, datNew.bonificacion)
        ])
        .then( () => {resolve()})
        .catch( () => { reject("Ha ocurrido un error, recargue la pagina y verifique la informacion") })
    });
}


function setDescripcion(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew && datNew){
            graphql.query(
            `
                mutation{
                    tipoSetDescripcion(idTipo: `+id+`, descripcion: "`+datNew+`" )
                }
            `,
            err => {
                if(!err)
                    res();
                else
                    rej();
            }
            )
        }else{
            res();
        }
    } )
}

function setPrecioKg(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew && datNew){
            graphql.query(
            `
                mutation{
                    tipoSetPrecioKg( idTipo: `+id+`, precioKg: `+datNew+` )
                }
            `,
            err => {
                if(!err)
                    res();
                else
                    rej();
            }
            )
        }
    })
}

function setBonificacion(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew && datNew ){
            graphql.query(
            `
                mutation{
                    tipoSetBonificacion( idTipo:`+id+`, bonificacion: `+datNew+` )
                }
            `,
            err => {
                if(!err)
                    res();
                else
                    rej();
            }
            )
        }
    })
}