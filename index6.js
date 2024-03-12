// const dbConnect= require('./mongodb')

// const {MongoClient} = require('mongodb');
// const url= 'mongodb://localhost:27017';
// const databaseName='e-comm'
// const client = new MongoClient(url);

// async function dbConnect() {
//     let result = await client.connect();
//     db = result.db(databaseName);
//     let collection =  db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }


// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })

// const main =async()=>{
//     let data =await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }
// main();
// getData();

// ---------------------------------------------------------------------------------------------------------------------------------------
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'e-comm';

async function connectToMongoDB() {
    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
        // Connect the client to the MongoDB server
        await client.connect();

        console.log('Connected to MongoDB server');

        // Specify the database to be used
        const db = client.db(dbName);

        // Perform operations with the database
        // For example, insert documents into a collection
        const collection = db.collection('products');
        await collection.insertOne({ name: 'John', age: 30 });

        console.log('Document inserted successfully');

        // Query documents from the collection
        const documents = await collection.find({}).toArray();
        console.log('Documents:', documents);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the client when done
        await client.close();
        console.log('MongoDB connection closed');
    }
}

// Call the function to connect to MongoDB
connectToMongoDB();
