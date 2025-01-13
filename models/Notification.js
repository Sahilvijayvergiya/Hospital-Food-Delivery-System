const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: { type: String, required: true },
    status: { type: String, enum: ['Unread', 'Read'], default: 'Unread' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notification', NotificationSchema);


// [
//     {
//       "recipient": "64d9f1f70c3f2d2f887e1b01",
//       "message": "Your task has been successfully completed.",
//       "status": "Unread",
//       "createdAt": "2025-01-09T10:30:00Z"
//     },
//     {
//       "recipient": "64d9f1f70c3f2d2f887e1b02",
//       "message": "A new task has been assigned to you.",
//       "status": "Read",
//       "createdAt": "2025-01-08T12:15:00Z"
//     },
//     {
//       "recipient": "64d9f1f70c3f2d2f887e1b03",
//       "message": "Please update your task progress.",
//       "status": "Unread",
//       "createdAt": "2025-01-07T09:00:00Z"
//     },
//     {
//       "recipient": "64d9f1f70c3f2d2f887e1b04",
//       "message": "Your account details have been updated.",
//       "status": "Read",
//       "createdAt": "2025-01-06T14:45:00Z"
//     },
//     {
//       "recipient": "64d9f1f70c3f2d2f887e1b05",
//       "message": "A scheduled task has been delayed.",
//       "status": "Unread",
//       "createdAt": "2025-01-05T16:20:00Z"
//     }
//   ]
  