export default `
    type Lote{
        id : Int!
        productor : Productor!
        conductor : Conductor!
        secado : Secado!
        tipo : Tipo!
        fecha : String!
        cantidadKg : Float!
        factorRendimiento : Float!
        humedad : Float!
        pruebaTaza : Float!
        precioBase : Float!
        saldo : Float!
        descuento : Float!
        retefuente : Float
        bonificacion : Float
        salidas : [Salida]
        ajustes : [Ajuste]
    }
    
    input newLote{
        idProductor : Int!
        idConductor : Int!
        idSecado : Int!
        idTipo : Int!
        fecha : String!
        cantidadKg : Float!
        factorRendimiento: Float!
        humedad : Float!
        pruebaTaza : Float!
        precioBase : Float!
        saldo : Float!
        descuento : Float!
        retefuente : Float
        bonificacion : Float
    }
`