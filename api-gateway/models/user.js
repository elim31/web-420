/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   22 Apr 2021
; Modified by: Eunice Lim
; Description: User model and schema
;===========================================
*/

/**Fields username, password, and email*/
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const User = module.exports = mongoose.model('User', userSchema);

/**
 * Database queries
 */

//add function. user.save to add new user to database
module.exports.add =(user, callback) => {
    user.save(callback);
}

//getById function, for finding users by ID
module.exports.getById = (id, callback)=> {
    var query ={_id: id};
    User.findById(query, callback);
    };

//Query for finding individual users by email address
module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query,callback);
};