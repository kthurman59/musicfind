const path = require('path');

module.exports = {
    development: {
        dialect: 'sqlite',
        storage: path.join(__dirname, 'db.sqlite'), //adjust the path and filename as needed
    },

};