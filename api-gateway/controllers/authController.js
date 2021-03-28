/*
============================================
; Title:  authController.js
; Author: Professor Krasso
; Date:   25 Mar 2021
; Modified by: Eunice Lim
; Description: Added in Week 2
;===========================================
*/

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res) {

    res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};