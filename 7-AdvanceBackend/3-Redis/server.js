const redis = require('redis')

const client = redis.createClient({
    host : 'localhost',
    port : 6379
})

client.on("error",(error)=>{
    console.log("Redis Client Error Occured",error)
})

async function testRedisConnection(){
    try{
        await client.connect()
        console.log('Connected to redis')

        // 1 - key,value pairs
        await client.set("key","value");
        const extractvalue = await client.get("key")

        console.log(extractvalue)
        
        // 2- for deleting 
        await client.del("key")
        
        // 3
        const count = await client.set('num',"100")
        console.log(await client.incr('num')) // 101
        console.log(await client.decr('num')) // 100


    } 
    catch(error){
        console.error(error);
    }
    finally{
        await client.quit(); // sometimes we leave open connections, it will make them stop
    }
}

testRedisConnection();