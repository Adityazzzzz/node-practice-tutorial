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
        let arr = await client.lRange('data', 0, -1);
        await client.lPush('data', 'note4');

        const arr2 = await client.lPop("notes");
        console.log(arr2)







    }
    catch (error) {
        console.error(error);
    }
    finally {
        await client.quit();
    }
}

RedisDS()