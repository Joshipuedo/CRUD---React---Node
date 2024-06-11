import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://josirmatortolero:zmnl42ZKlQLz9Ndj@cluster0.qhnksqc.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;