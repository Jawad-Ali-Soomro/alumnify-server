const mongoose = require('mongoose');
const connectDatabase = () => {
    const connection = mongoose.connect(process.env.MONGO_PORT)
    if (connection) {
        return console.log('connection established');
    }
    return connection.on('error', (err) => console.error(err));
}

module.exports = connectDatabase;