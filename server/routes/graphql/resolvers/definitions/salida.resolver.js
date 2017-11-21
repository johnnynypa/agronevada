import Salida from '../../../../model/definitions/salida';
import Lote from '../../../../model/definitions/lote';
import Cliente from '../../../../model/definitions/cliente';

export default {
    Query:{
        salida(root, {id}){
            return (id) ? Salida.getById(id)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        salidas(){
            return Salida.getAlls()
            .then( dat => dat)
            .catch( err => {throw new Error(err)})
        }
    },
    Salida:{
        cliente(salid){
            return (salid.idCliente) ? Cliente.getById(salid.idCliente)
                .then(dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        detalles(salid){
            
        }
    },
    Mutation:{
        /**
         * @param salida : newSalida
         * @return {Boolean}
         **/
        createSalida(root, {salida}){
            return validarDetalles(salida.detalles)
            .then( () => {
                return Salida.newSalida(salida)
                .then( dat => true)
                .catch(err => {throw new Error(err)});
            })
            .catch(err => {throw new Error(err)});
        },
        
        createSalidaReturned(root, {salida}){
            return validarDetalles(salida.detalles)
            .then( () => {
                return Salida.newSalida(salida)
                .then( dat => {
                    salida.id = dat;
                    return salida;
                })
                .catch(err => {throw new Error(err)});
            })
            .catch(err => {throw new Error(err)});
        }
    }
}

function validarDetalles(details){
    return new Promise( async (resolve, reject) => {
        let err = false;
        for (const Detail of details ){
            try{
                await Lote.getById(Detail.idLote).then( dat =>{
                    if(!dat || (dat.saldo - Detail.cantidadKg < 0) ){
                        err = true;
                        reject("El lote: "+Detail.idLote+' No posee la cantidad requerida');
                    }
                })
            }catch(err){
                console.log(err);
                reject("Ha ocurrido un error, intentelo mas tarde");
            }
        }
        if(!err){
            resolve();
        }
    })
}