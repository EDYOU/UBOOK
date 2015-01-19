var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: String,
    school_id: String,
    name: String,
    school_name: String,
    username: String,
    email: String,
    password: String,
    subjects: {

    },
    classes: {

    }
});

module.exports = mongoose.model('User', UserSchema);

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};