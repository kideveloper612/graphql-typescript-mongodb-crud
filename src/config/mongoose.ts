var env = process.env.NODE_ENV || 'development',
    config = require('./config.ts')[env],
    mongooseConf = require('mongoose');

module.exports = function () {
    mongooseConf.Promise = global.Promise;
    var db = mongooseConf.connect(config.db, { useMongoClient: true });
    mongooseConf.connection.on('error', function () {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
    }).on('open', function () {
        console.log('Connection extablised with MongoDB')
    })
    return db;
};
