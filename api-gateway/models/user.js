/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   25 Mar 2021
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
module.exports = mongoose.model('User', userSchema);
