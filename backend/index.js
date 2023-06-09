const app = require('./server')
const ReviewsDAO = require('./dao/reviewsDAO.js');
require('dotenv').config();
const mongodb = require('mongodb');
const UsersDao = require('./dao/usersDAO');


const MongoClient = mongodb.MongoClient;
const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@reviews.8dypaa3.mongodb.net/?retryWrites=true&w=majority`;
const port = 5000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await ReviewsDAO.injectDB(client);
    await UsersDao.injectDB(client);
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})

