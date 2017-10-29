export default `
    type DetalleSalida{
        id : Int!
        lote : Lote!
        Salida : Salida!
        cantidadKg : Float!
    }
    
    input newDetalleSalida{
        idLote : Int!
        idSalida : Int!
        cantidadKg : Float!
    }
`