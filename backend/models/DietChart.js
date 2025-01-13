const mongoose = require('mongoose');

const DietChartSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    meals: [
        {
            mealType: { type: String, enum: ['Morning', 'Afternoon', 'Evening', 'Night'], required: true },
            ingredients: { type: String, required: true },
            instructions: { type: String },
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DietChart', DietChartSchema);



// [
//     {
//       "patient": "64d9f1f70c3f2d2f887e1b01",
//       "meals": [
//         {
//           "mealType": "Morning",
//           "ingredients": "Oatmeal, Banana, Almond Milk",
//           "instructions": "Serve warm; avoid adding sugar."
//         },
//         {
//           "mealType": "Afternoon",
//           "ingredients": "Grilled Chicken, Brown Rice, Steamed Vegetables",
//           "instructions": "Ensure chicken is cooked thoroughly."
//         },
//         {
//           "mealType": "Evening",
//           "ingredients": "   ",
//           "instructions": "Use seasonal fruits; no added sugar in yogurt."
//         },
//         {
//           "mealType": "Night",
//           "ingredients": "Soup, Whole Grain Bread",
//           "instructions": "Use low-sodium soup; warm bread before serving."
//         }
//       ],
//       "createdAt": "2025-01-09T10:00:00Z"
//     },
//     {
//       "patient": "64d9f1f70c3f2d2f887e1b02",
//       "meals": [
//         {
//           "mealType": "Morning",
//           "ingredients": "Scrambled Eggs, Toast, Orange Juice",
//           "instructions": "Serve eggs hot; ensure toast is lightly buttered."
//         },
//         {
//           "mealType": "Afternoon",
//           "ingredients": "Grilled Fish, Quinoa, Mixed Greens",
//           "instructions": "Use olive oil dressing for the greens."
//         },
//         {
//           "mealType": "Evening",
//           "ingredients": "Smoothie (Spinach, Berries, Almond Milk)",
//           "instructions": "Blend until smooth; serve chilled."
//         },
//         {
//           "mealType": "Night",
//           "ingredients": "Steamed Lentils, Cucumber Salad, Whole Grain Roti",
//           "instructions": "Serve lentils warm; salad should be fresh."
//         }
//       ],
//       "createdAt": "2025-01-08T09:30:00Z"
//     }
//   ]
  