import Productor from '../../../../model/definitions/productor';

export default {
    Query:{
        productores(){
            return Productor.getAlls()
            .then( dat => dat)
            .catch( err => {throw new Error(err)});
        },
        
        /**
         * @param id : Int
        **/
        productor(root, {id}){
            return (id) ? Productor.getById(id)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        }
    },
    Mutation:{
        /**
         * @param productor : newProductor
         * @return {Boolean}
         **/
        createProductor(root,{productor}){
            return (productor) ? Productor.newProductor(productor)
                .then( dat => true)
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        /**
         * @param productor : newProductor
         * @return {Productor}
         **/
        createProductorReturned(root, {productor}){
            return (productor) ? Productor.newProductor(productor)
                .then( dat => {
                    productor.id = dat;
                    return productor;
                })
                .catch( err => {throw new Error(err)})
            : null;
        },
        
        productorSetNombreFinca(root, {idProductor, nombreFinca}){
            if(idProductor){
                return Productor.updateSetNombreFinca(idProductor, nombreFinca)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
        productorSetNombreGerente(root, {idProductor, nombreGerente}){
            if(idProductor){
                return Productor.updateSetNombreGerente(idProductor, nombreGerente)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
        productorSetTelefono(root, {idProductor, telefono}){
            if(idProductor){
                return Productor.updateSetNombreTelefono(idProductor, telefono)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
        productorSetDireccion(root, {idProductor, direccion}){
            if(idProductor){
                return Productor.updateSetNombreDireccion(idProductor, direccion)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
        productorSetEmail(root, {idProductor, email}){
            if(idProductor){
                return Productor.updateSetNombreEmail(idProductor, email)
                .then( dat => dat )
                .catch( err => {throw new Error(err)});
            }else{
                throw new Error("No hay identificador especificado del productor");
            }
        },
    }
}