const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB Connected');

        // 🔔 LISTEN EVENTS
        mongoose.connection.on('disconnected', () => {
            console.log('❌ MongoDB disconnected');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('✅ MongoDB reconnected');
        });

        mongoose.connection.on('error', (err) => {
            console.log('⚠️ MongoDB error:', err.message);
        });

    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB

