
module.exports = function () {
    var db = require('../libs/connect_db')();
    var Schema = require('mongoose').Schema;
    var model = require('../models/tasks');
    var mongoose = require('mongoose');


    var task = new Schema({
        title: String,
        description: String,
        status: Boolean
    })
    return db.model('tasks', task);
}