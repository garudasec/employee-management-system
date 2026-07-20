import dns from 'dns';
// Force Node.js to use reliable public DNS servers
dns.setServers(['1.1.1.1', '8.8.8.8']); 


import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully.."); 
        
    } catch (error) {
        console.log(`Failed to connect Database ${error}`)
        process.exit(1) // mongoose apna process band kar dega jo connection kar rha  tha
    }
}


export default connectDB;








