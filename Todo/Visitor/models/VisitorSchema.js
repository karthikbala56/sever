const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitorSchema = new Schema({
        visitorname:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        mobile:{
            type:Number,
            required:true
        },
        wing:{
            type:String,
            required:true
        },
        flat:{
            type:Number,
            required:true
        },
        flatowner:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        visitoraddress:{
            type:String,
            required:true
        },
        purpose:{
            type:String,
            required:true
        }

})

module.exports = Visitor = mongoose.model('Visitor', VisitorSchema)