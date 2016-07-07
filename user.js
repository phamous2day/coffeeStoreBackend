var mongoose = require('mongoose');
var User = mongoose.model('User', {
  "_id": {
    type:String,
  required: true
},
  "encryptedPassword": {
    type:String,
  required: true
},
  "authenticationTokens": [String],
  "orders": [

  {
    "options": {
    "grind": {type:String,
    required: true},
    "quantity": {type:Number,
    required: true}
  },
  "address": {
    "name": {type:String,
    required: true},
    "address": {type:String,
    required: true},
    "address2": String,
    "city": {type:String,
    required: true},
    "state": {type:String,
    required: true},
    "zipCode": {type:String,
    required: true},
    "deliveryDate": {type:Date,
    required: true}
  }
}
]

});

module.exports = User;
