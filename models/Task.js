const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskType: { type: String, enum: ['Preparation', 'Delivery'], required: true },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Either a pantry staff or delivery personnel
        required: true,
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    mealDetails: {
        mealType: { type: String, enum: ['Morning', 'Afternoon', 'Evening', 'Night'], required: true },
        deliveryStatus: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema);





// [
//     {
//       "taskType": "Preparation",
//       "assignedTo": "64d9f1f70c3f2d2f887e1a90",
//       "patient": "64d9f1f70c3f2d2f887e1a91",
//       "mealDetails": {
//         "mealType": "Morning",
//         "deliveryStatus": "Completed"
//       },
//       "createdAt": "2025-01-09T08:30:00Z"
//     },
//     {
//       "taskType": "Delivery",
//       "assignedTo": "64d9f1f70c3f2d2f887e1a92",
//       "patient": "64d9f1f70c3f2d2f887e1a93",
//       "mealDetails": {
//         "mealType": "Afternoon",
//         "deliveryStatus": "In Progress"
//       },
//       "createdAt": "2025-01-09T09:00:00Z"
//     },
//     {
//       "taskType": "Preparation",
//       "assignedTo": "64d9f1f70c3f2d2f887e1a94",
//       "patient": "64d9f1f70c3f2d2f887e1a95",
//       "mealDetails": {
//         "mealType": "Evening",
//         "deliveryStatus": "Pending"
//       },
//       "createdAt": "2025-01-08T16:00:00Z"
//     },
//     {
//       "taskType": "Delivery",
//       "assignedTo": "64d9f1f70c3f2d2f887e1a96",
//       "patient": "64d9f1f70c3f2d2f887e1a97",
//       "mealDetails": {
//         "mealType": "Night",
//         "deliveryStatus": "Completed"
//       },
//       "createdAt": "2025-01-08T22:30:00Z"
//     },
//     {
//       "taskType": "Preparation",
//       "assignedTo": "64d9f1f70c3f2d2f887e1a98",
//       "patient": "64d9f1f70c3f2d2f887e1a99",
//       "mealDetails": {
//         "mealType": "Afternoon",
//         "deliveryStatus": "In Progress"
//       },
//       "createdAt": "2025-01-07T11:45:00Z"
//     }
//   ]
  