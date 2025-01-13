const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['manager', 'staff', 'delivery'], required: true },
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', UserSchema);


// const sampleUsers = [
//     {
//         name: 'John Manager',
//         email: 'hospital_manager@xyz.com',
//         password: 'Password@2025',
//         role: 'manager'
//     },
//     {
//         name: 'Sarah Staff',
//         email: 'hospital_pantry@xyz.com',
//         password: 'Password@2025',
//         role: 'staff'
//     },
//     {
//         name: 'Mike Delivery',
//         email: 'hospital_delivery@xyz.com',
//         password: 'Password@2025',
//         role: 'delivery'
//     }
// ];