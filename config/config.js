import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGOURL)
        console.log(`DB connected: ${connectDB.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}
export default connectDB