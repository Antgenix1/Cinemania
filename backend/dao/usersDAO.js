const mongodb = require('mongodb')

let users

module.exports = class UsersDao {
    static async injectDB(conn) {
        if (users) {
            return
        }
        try {
            users = await conn.db("reviews").collection("users")
        } catch (e) {
            console.log(`Unable to establish connection handles in userDAO: ${e}`)
        }
    }

    static async addUser(user) {
        try{
            const userDoc = {
                user: user
            }
            console.log(`adding ${user}`)
            return await users.insertOne(userDoc)
        } catch (e) {
            console.log(`Unable to post user: ${e}`)
            return {error: e}
        }
    }
    
}