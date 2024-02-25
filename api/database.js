import mongoose from "mongoose";





const dbConnection = async () => {
    const databaseUrl = `${process.env.DB_URL}`;
    try {
        await mongoose.connect(
            databaseUrl,
            { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database successfully connected')
    } catch (error) {
        console.error(`Database Connectivity Error: ${error}`)
        throw new Error(error)
    }
}
export default dbConnection