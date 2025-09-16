const redis = require('redis');

const client = redis.createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

async function pubsub() {
    try {
        await client.connect();

        // create and connect subscriber
        const subscriber = client.duplicate();
        await subscriber.connect();

        await subscriber.subscribe('Redis', (message) => {
        console.log(`Received message: ${message}`);
        });



        await client.publish('Redis', 'New Video for redis youtube channel');
        await client.publish('Redis', 'Another Video');

        await new Promise((resolve) => setTimeout(resolve, 1000));


        await subscriber.unsubscribe('Redis');
        await subscriber.quit();
    } 
    catch (err) {
        console.error(err);
    } 
    finally {
        await client.quit();
    }
}

pubsub();
