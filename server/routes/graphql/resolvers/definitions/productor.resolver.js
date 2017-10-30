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
        productor(id){
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
         * */
        createProductor(productor){
            
        },
        /**
         * @param productor : newProductor
         * @return {Productor}
         * */
        createProductorReturned(productor){
            
        }
    }
}