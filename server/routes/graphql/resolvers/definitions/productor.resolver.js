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
        */
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
        }
    }
}