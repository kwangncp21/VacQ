const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        reqiured: [true,'Please add a name'],
        nuique: true,
        trim:true,
        maxlength:[50,'Name can not be nore than 50 characters']
    },
    address:{
        type: String,
        reqiured: [true,'Please add an address']
    },
    district:{
        type: String,
        reqiured: [true,'Please add a district']
    },
    province:{
        type: String,
        reqiured: [true,'Please add an province']
    },
    postalcode:{
        type: String,
        reqiured: [true,'Please add a postalcode'],
        maxlength:[5,'Postalcode can not be more than 5 digits']
    },
    tel:{
        type: String
    },
    region:{
        type: String,
        reqiured: [true,'Please add a region']
    }
});

module.exports=mongoose.model('Hospital',HospitalSchema);