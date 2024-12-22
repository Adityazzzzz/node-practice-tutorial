const { readFile, writeFile } = require('fs').promises;

// const util = require('util');
// const readFilePromise =util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start=async()=>{
    try{
        const first= await readFile('./content/first.txt','utf8');
        await writeFile('./content/resultfile2.txt',`This is the only ${first}`);
        console.log(first);
    }
    catch(error){
        console.log(error);
    }
    
}
start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {

//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

