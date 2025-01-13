const mongoose = require('mongoose');

const DeliveryPersonnelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String },
    availability: { type: Boolean, default: true }, // To check if they are currently available for delivery
});

module.exports = mongoose.model('DeliveryPersonnel', DeliveryPersonnelSchema);



// [
//     {
//       "name": "John Doe",
//       "contact": "1234567890",
//       "location": "Sector 22, New Delhi",
//       "availability": true
//     },
//     {
//       "name": "Jane Smith",
//       "contact": "9876543210",
//       "location": "MG Road, Bengaluru",
//       "availability": false
//     },
//     {
//       "name": "Rahul Kumar",
//       "contact": "8765432109",
//       "location": "Salt Lake City, Kolkata",
//       "availability": true
//     },
//     {
//       "name": "Priya Sharma",
//       "contact": "7654321098",
//       "location": "Andheri West, Mumbai",
//       "availability": false
//     },
//     {
//       "name": "David Lee",
//       "contact": "6543210987",
//       "location": "Park Street, Kolkata",
//       "availability": true
//     }
//   ]
  