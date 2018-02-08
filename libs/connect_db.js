var mongoose = require('mongoose');
var db;

module.exports = function() {
    if (!db){
        db = mongoose.connect('mongodb://dobeis:84318703@ds225608.mlab.com:25608/dbtest')
    }
    return mongoose.connection;
}