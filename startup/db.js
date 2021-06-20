'use strict';
const mongoose = require('mongoose');
const winston = require('winston');

module.exports = ()=>{
    mongoose.connect('mongodb+srv://admin:DZYfMfEOAvo9ZEXR@cluster0.nvry9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
        useCreateIndex:true
        
    }).then(()=> winston.info('Mongo db connected...'))
}