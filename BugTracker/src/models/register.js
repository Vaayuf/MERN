const mongoose = require('mongoose');
const validator = require('validator');

const bugregSchema = mongoose.Schema({
    pass:{
        type: String,
        required: true,
    },
    email:{
        type: String, 
        required: true,
        unique: [true, 'Email already present'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }   
        }
    }
})

const projSchema = mongoose.Schema({
    bugname:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    threat:{
        type: String,
        required: true,
    },
    timestamp: { type: Date, default: Date.now},

}) 



//const Bug= mongoose.model('Bug',bugSchema);
const Project= mongoose.model('Project', projSchema);
const Bugtrack  = mongoose.model('Bugtrack', bugregSchema);
module.exports = {
    Project: Project,
    Bugtrack: Bugtrack
}
//Bugtracks would be name of database



