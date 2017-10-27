export default `
    type Conductor{
        id : Int!
        nombre : String!
        telefono : String
    }
    
    input newConductor{
        nombre : String!
        telefono : String
    }
`