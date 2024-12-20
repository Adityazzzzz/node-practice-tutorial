const os= require('os');
// console.log(os.userInfo());


const currentos ={
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalmem:os.totalmem(),

}
console.log(currentos);
