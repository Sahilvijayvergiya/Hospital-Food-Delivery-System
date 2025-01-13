const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('api/deliveryPersonnel', require('./routes/deliveryPersonnelRoutes'))
app.use('/api/deliveries', require('./routes/deliveryTrackingRoutes'));
app.use('/api/dietcharts', require('./routes/dietChartRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/pantryStaff', require('./routes/pantryStaffRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
