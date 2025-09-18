const express = require('express')
const axios = require('axios').default
const redis = require('redis')

const client = redis.createClient({
    host: 'localhost',
    port: 6379
})

client.connect();

client.on("error", (error) => {
    console.log("Redis Client Error Occurred", error)
})

const app = express()

app.get('/', async (req, res) => {
    const cacheValue = await client.get('todos')
    if (cacheValue) return res.json(JSON.parse(cacheValue))

    const { data } = await axios.get('https://dummyjson.com/todos')
    await client.set('todos', JSON.stringify(data))

    return res.json(data)
    
})

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});