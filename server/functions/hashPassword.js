import bcrypt from 'bcrypt';
var salNumHash = 10;

export default (psw) => {
    return new Promise( (resolve, reject) => {
        bcrypt.hash(psw, salNumHash)
        .then( (hashed) => { resolve(hashed) })
        .catch( (err) => {
            console.log("******************************");
            console.log(err);
            console.log("Error en la funcion de encriptado de la contraseña");
            reject()
        });
    })
}
