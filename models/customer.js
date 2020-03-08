 
const crypto = require ('crypto');

 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: String, required: true },
 
  hashed_password: {type: String, required: "Password is required"},
  salt: String, updated: Date, created: {type: Date, default: Date.now},
 
  make: { type: String, required: true },
  model: {type: String, required: true },
  vin: String,
  mileage: String,
  lastSereviceDate: { type: Date, default: Date.now },
  notes: String

})

customerSchema
.virtual('password')
.set(function(pasword) {
this._password = this._password
this.salt = this.makeSalt()
this.hashed_password = this.encryptPassword(password)
})
.get(function() {
  return this._password
})

customerSchema.path('hashed_password').validate(function(v) {
  if (this._password && this.password.length < 8) {
    this.invalidate('password', 'Password must be at least 8 characters')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}), null

customerSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText)===this.hashed_password
  },
  encryptPassword: function(password) {
    if (!password) return ''
    try {
      return crypto
      .createHmac('sha1', this.salt)
      .update(password)
      .digest('hex')
    } catch (err) {
      return ''
    }
  },
  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  }
};


const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
