export default `
    type Tipo{
        id : Int!
        descripcion : String!
        precioKg : Float!
        bonificacion : Float
    }
    
    input newTipo{
        descripcion : String!
        precioKg : Float!
        bonificacion : Float
    }
`