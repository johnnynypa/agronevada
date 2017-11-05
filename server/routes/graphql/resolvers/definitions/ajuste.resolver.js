'use strict';

import Ajuste from '../../../../model/definitions/ajuste';
import Lote from '../../../../model/definitions/lote';

export default {
    Query:{
        ajuste(id){
            return (id) ? Ajuste.getById(id)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        },
        ajustes(){
            return Ajuste.getAlls()
            .then( dat => dat)
            .catch( err => {throw new Error(err)})
        },
        ajustesByLote(idLote){
            return (idLote) ? Ajuste.getById(idLote)
                .then( dat => dat)
                .catch( err => {throw new Error(err)})
            : null;
        }
    },
    Mutation:{
        createAjuste(ajuste){
            if(ajuste){
                validarSaldoLote(ajuste.idLote, ajuste.cantidadKg)
                .then( () =>{
                    Ajuste.newAjuste(ajuste)
                    .then(dat => true)
                    .catch( err => {throw new Error(err)})
                })
            }else{
                throw new Error("El saldo del lote es menor que la cantidad ajustada");
            }
        },
        
        createAjusteReturned(ajuste){
            if(ajuste){
                validarSaldoLote(ajuste.idLote, ajuste.cantidadKg)
                .then( () =>{
                    Ajuste.newAjuste(ajuste)
                    .then(dat => {
                        ajuste.id = dat;
                        return ajuste;
                    })
                    .catch( err => {throw new Error(err)})
                })
            }else{
                throw new Error("El saldo del lote es menor que la cantidad ajustada");
            }
        }
    }
}

function validarSaldoLote(idLote, cantidad){
    return new Promise( (resolve, reject) => {
        try{
            await Lote.getById(idLote).then( dat =>{
                if(!dat || (dat.saldo - cantidad < 0) ){
                    reject('El lote: '+idLote+' No posee la cantidad requerida');
                }else{
                    resolve();
                }
            })
        }catch(err){
            reject("Ha ocurrido un error, intentelo mas tarde");
        }
    })
}