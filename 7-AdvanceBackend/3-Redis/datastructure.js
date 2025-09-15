const redis = require('redis')

const client = redis.createClient({
    host: 'localhost',
    port: 6379
})

client.on("error", (error) => {
    console.log("Redis Client Error Occured", error)
})

async function RedisDS() {
    await client.connect()

    try {
        // 1. strings -> set, get, mset, mget

        await client.set("user:name", "John doe");
        const name = await client.get("user:name");
        console.log(name);

        // multi-set
        await client.mSet(["user:email", "123@gmail.com", "user:age", "30", "user:country", "India"]);
        // destructure them first
        const [email, age, country] = await client.mGet(["user:email", "user:age", "user:country"])
        console.log(email, age, country);



        
        // 2. vector -> lpush, rpush, lpop, rpop, lrange

        await client.lPush('data', ['note1', 'note2', 'note3']);

        let listarr = await client.lRange('data', 0, -1);

        await client.lPush('data', 'note4');

        const listarr2 = await client.lPop("notes");




        // 3.sets -> sADD, sMEMBER, sISMEMBER, sREM
        await client.sAdd('user:nickName',['john','varun','xyz'])
        const extractnicknames = await client.sMembers('user:nickName') 
        
        // to search
        const isVarunPresent = await client.sIsMember('user:nickName','varun')

        // to remove
        await client.sRem('user:nickName','xyz')




        // 4.Sorted sets -> zAdd, zRange, zRank, zRem

        // 5.Hash ->  hSET, hGET, hGETALL, hDEL
        await client.hSet("product:1", {
            name: "Product 1",
            description: "product one description",
            rating: "5",
        });

        const getProductRating = await client.hGet("product:1", "rating");

        const getAllProductDetails = await client.hGetAll("product:1");
       
        await client.hDel("product:1", "rating");

        const updatedProductDetails = await client.hGetAll("product:1");
       


    }
    catch (error) {
        console.error(error);
    }
    finally {
        await client.quit();
    }
}

RedisDS()