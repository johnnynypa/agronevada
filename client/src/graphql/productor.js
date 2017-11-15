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

export function createProductor(dat){
    return new Promise( (resolve, reject ) => {
        graphql.query(`
            mutation{
              createProductorReturned(productor:{
                nombreFinca : "`+dat.nombreFinca+`"
                nombreGerente : "`+dat.nombreGerente+`"
                direccion: "`+dat.direccion+`"
                telefono: "`+dat.telefono+`"
                email: "`+dat.email+`"
              }){
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

export function updateDataProductor(datOrigin, datNew){
    return new Promise( (resolve, reject) => {
        Promise.all([
            setNombreFinca(datOrigin.id, datOrigin.nombreFinca, datNew.nombreFinca),
            setNombreGerente(datOrigin.id, datOrigin.nombreGerente, datNew.nombreGerente),
            setTelefono(datOrigin.id, datOrigin.Telefono, datNew.Telefono),
            setDireccion(datOrigin.id, datOrigin.Direccion, datNew.Direccion),
            setEmail(datOrigin.id, datOrigin.Email, datNew.Email),
        ])
        .then( () => { resolve() })
        .catch( () => { reject("Ha ocurrido un error, recargue la pagina y vuelva a intentarlo.") })
    })
}

function setNombreFinca(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew){
            graphql.query(
            `
                mutation{
                    productorSetNombreFinca( id: `+id+`, nombreFinca: `+datNew+` )
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
    })
}

function setNombreGerente(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew){
            graphql.query(
            `
                mutation{
                    productorSetNombreGerente(id: `+id+`, nombreGerente: ` +datNew+` )
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
    })
}

function setTelefono(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew){
            graphql.query(
            `
                mutation{
                    productorSetTelefono( id: `+id+`, telefono: `+datNew+` )
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
    })
}

function setDireccion(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew){
            graphql.query(
            `
                mutation{
                    productorSetDireccion(id: `+id+`, direccion: `+datNew+` )
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
    })
}

function setEmail(id, origin, datNew){
    return new Promise( (res, rej) => {
        if(origin != datNew){
            graphql.query(
            `
                mutation{
                    productorSetEmail( id: `+id+`, email: `+datNew+` )
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
    })
}