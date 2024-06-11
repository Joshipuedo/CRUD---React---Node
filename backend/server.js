import express    from 'express';
import cors       from 'cors';
import connectDB from './config/db.js';
import itemRoutes from './routes/itemRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();


//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', itemRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

