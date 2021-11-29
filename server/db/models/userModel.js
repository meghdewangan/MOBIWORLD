const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
mongoose.promise = Promise

//** USER MODEL **//
// ** MODEL is like a TABEL and User is table name**//

// Create Schema
const userSchema = new Schema({
    username: { type: String, unique: false },
    email: { type: String, unique: false },
    password: { type: String, unique: false, required: false },
    favourite:[{ type: Schema.Types.ObjectId, ref: 'AdModel' }]
       
});


// Define schema methods
userSchema.methods = {
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
};

userSchema.methods.checkPassword = function ( password, callback ) {

    var user = this;

    bcrypt.compare(password, user.password, function(err, isValid) {
        if (err) {
            callback(err)
        }
        callback(null, isValid)
    })

}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('=======NO PASSWORD PROVIDED=======')
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
});

var User = mongoose.model('User', userSchema);


module.exports = { User };
