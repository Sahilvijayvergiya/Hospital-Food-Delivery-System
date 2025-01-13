const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    diseases: { type: String },
    allergies: { type: String },
    room: { type: String },
    bed: { type: String },
    age: { type: Number },
    gender: { type: String },
    contact: { type: String },
    emergencyContact: { type: String },
    notes: { type: String },
});

module.exports = mongoose.model('Patient', PatientSchema);



// [
//     {
//       "name": "John Doe",
//       "diseases": "Diabetes",
//       "allergies": "Peanuts",
//       "room": "101A",
//       "bed": "1",
//       "age": 45,
//       "gender": "Male",
//       "contact": "123-456-7890",
//       "emergencyContact": "987-654-3210",
//       "notes": "Requires low sugar meals"
//     },
//     {
//       "name": "Jane Smith",
//       "diseases": "Hypertension",
//       "allergies": "None",
//       "room": "202B",
//       "bed": "2",
//       "age": 58,
//       "gender": "Female",
//       "contact": "234-567-8901",
//       "emergencyContact": "876-543-2109",
//       "notes": "Low salt diet recommended"
//     },
//     {
//       "name": "Michael Johnson",
//       "diseases": "Asthma",
//       "allergies": "Dust, Pollen",
//       "room": "303C",
//       "bed": "3",
//       "age": 30,
//       "gender": "Male",
//       "contact": "345-678-9012",
//       "emergencyContact": "765-432-1098",
//       "notes": "Keep inhaler accessible"
//     },
//     {
//       "name": "Emily Davis",
//       "diseases": "Heart Disease",
//       "allergies": "Seafood",
//       "room": "404D",
//       "bed": "4",
//       "age": 65,
//       "gender": "Female",
//       "contact": "456-789-0123",
//       "emergencyContact": "654-321-0987",
//       "notes": "Monitor cholesterol levels"
//     },
//     {
//       "name": "Chris Wilson",
//       "diseases": "Kidney Stones",
//       "allergies": "None",
//       "room": "505E",
//       "bed": "5",
//       "age": 38,
//       "gender": "Male",
//       "contact": "567-890-1234",
//       "emergencyContact": "543-210-9876",
//       "notes": "Increase water intake"
//     }
//   ]
  
