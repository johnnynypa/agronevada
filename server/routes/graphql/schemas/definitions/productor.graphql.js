export default `
    type Productor{
        id : Int!
        nombreFinca : String!
        nombreGerente : String!
        direccion : String!
        telefono : String!
        email : String!
    }
    
    input newProductor{
        nombreFinca : String!
        nombreGerente : String!
        direccion : String!
        telefono : String!
        email : String!
    }
`