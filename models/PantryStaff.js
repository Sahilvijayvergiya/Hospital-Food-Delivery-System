const mongoose = require('mongoose');

const PantryStaffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    assignedTasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PantryStaff', PantryStaffSchema);




// [
//     {
//       "name": "John Doe",
//       "contact": "+1234567890",
//       "assignedTasks": [
//         "64d9f1f70c3f2d2f887e1a90",
//         "64d9f1f70c3f2d2f887e1a91"
//       ],
//       "createdAt": "2025-01-09T10:00:00Z"
//     },
//     {
//       "name": "Jane Smith",
//       "contact": "+9876543210",
//       "assignedTasks": [
//         "64d9f1f70c3f2d2f887e1a92",
//         "64d9f1f70c3f2d2f887e1a93",
//         "64d9f1f70c3f2d2f887e1a94"
//       ],
//       "createdAt": "2025-01-08T15:30:00Z"
//     },
//     {
//       "name": "Alice Brown",
//       "contact": "+1122334455",
//       "assignedTasks": [
//         "64d9f1f70c3f2d2f887e1a95"
//       ],
//       "createdAt": "2025-01-07T08:15:00Z"
//     },
//     {
//       "name": "Bob Green",
//       "contact": "+9988776655",
//       "assignedTasks": [],
//       "createdAt": "2025-01-06T12:00:00Z"
//     },
//     {
//       "name": "Charlie Davis",
//       "contact": "+5566778899",
//       "assignedTasks": [
//         "64d9f1f70c3f2d2f887e1a96",
//         "64d9f1f70c3f2d2f887e1a97",
//         "64d9f1f70c3f2d2f887e1a98",
//         "64d9f1f70c3f2d2f887e1a99"
//       ],
//       "createdAt": "2025-01-05T17:45:00Z"
//     }
//   ]
  