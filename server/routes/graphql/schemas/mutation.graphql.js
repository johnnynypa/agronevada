export default `
    type Mutation{
        createLote ( lote : newLote ) : Boolean
        createLoteReturned (lote : newLote) : Lote
        createProductor (productor : newProductor) : Boolean
        createProductorReturned (productor : newProductor) : Producto
    }
`