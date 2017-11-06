import Conductor from '../../../../model/definitions/conductor';

export default{
    Query:{
        conductor(root, {id}){
            return (id) ? Conductor.getById(id)
                .then(dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        conductores(){
            return Conductor.getAlls()
                .then(dat => dat)
                .catch( err => {throw new Error(err)});
        }
    },
    Mutation:{
        /**
         * @param conductor : newConductor
         * @return {Boolean}
         **/
        createConductor(root, {conductor}){
            return (conductor) ? Conductor.newConductor(conductor)
                .then( dat => true)
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        /**
         * @param conductor : newConductor
         * @return {Conductor}
         **/
        createConductorReturned(root, {conductor}){
            return (conductor) ? Conductor.newConductor(conductor)
                .then( dat => {
                    conductor.id = dat;
                    return conductor;
                })
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        
        conductorSetNombre(root, {idConductor, nombre}){
            if(idConductor){
                return Conductor.updateSetNombre(idConductor, nombre)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
        conductorSetTelefono(root, {idConductor, telefono}){
            if(idConductor){
                return Conductor.updateSetTelefono(idConductor, telefono)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        }
    }
}