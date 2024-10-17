import mongoose from 'mongoose';

import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
    await mongoose
        .connect(`${process.env.URI}`)
        .then(() => console.log('MongoDB conectado'))
        .catch((error) => console.log(error));
}

export default connectDB;