/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   25 Mar 2021
; Modified by: Eunice Lim
; Description: Global hub for application level configurations
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000'; 
module.exports = config;

config.web.secret = 'topsecret';  //Week 2 - Add a public key