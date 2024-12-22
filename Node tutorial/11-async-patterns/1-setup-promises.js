const {readFile} = require('fs');

const getText =(path)=>{
    return new Promise((reject,resolve)=>{

        readFile(path,'utf8',(err,data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data);  
            }
        })
    })
}
getText('./content/first.txt')
.then((data)=>console.log(data))
.catch((err)=> console.log(err))



// readfile('./content/first.txt','utf8',(err,data) => {
//     if(err) return;
//     else{
//         console.log(data);  
//     }
// })