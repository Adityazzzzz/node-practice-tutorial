const redis = require('redis')

const client = redis.createClient({
    host : 'localhost',
    port : 6379
})

client.on("error",(error)=>{
    console.log("Redis Client Error Occured",error)
})

async function RedisDS(){
    try {
        
    }
    catch(error){
        console.error(error);
    }
    finally{
        await client.quit();
    }
}