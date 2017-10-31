export default `
    type Mutation{
        createProductor (productor : newProductor) : Boolean
        createProductorReturned (productor : newProductor) : Productor
    }
`

// createUsuario (usuario : newUsuario) : Boolean
//         createUsuarioReturned (usuario : newUsuario) : Usuario
// createTipo (tipo : newTipo) : Boolean
//         createTipoReturned (tipo : newTipo) : Tipo
// createLote ( lote : newLote ) : Boolean
//         createLoteReturned (lote : newLote) : Lote