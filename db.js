const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/todo-app'

module.exports = async () => {
    try {
        const connectionParams = {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(dbUrl, connectionParams);
        console.log('Connected to database')
    }
    catch (err) {
        console.log('Failed to connect to database.', err)
    }
}