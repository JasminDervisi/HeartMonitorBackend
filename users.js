const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    day: {
        type: String,
        require: true
    },
    bpm: {
        type: String,
            require: true
    }
});

//vanligvis del dette:
let Users = mongoose.model('Users', usersSchema);
module.exports.addUsers = (user, callback) => {
    Users.create(user, callback);
}

module.exports.getUsers = (callback, limit) => {
    Users.find(callback).limit(limit);
}



/*
module.exports.deleteSubject = (id, callback) => {

}
*/