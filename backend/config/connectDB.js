

const connectDB = async () => {
    try{
            const connect = await mongoose.connect(process.env.MONGO_URI);  
            console.log(`MongoDB connected`);
    }catch(error){
            console.log(error);
            process.exit(1);
    }
};

module.exports = connectDB;


//Method-I----> Use this function in sever.js to connect to monogodb and start the server

// const startServer = async() => {
    //     try{
    //         await connectDB();
    //         app.listen(PORT, () => {
    //             console.log(`server running on port ${PORT}`);
    //         });
    //     }catch(error){
    //         console.log(error);
    //     }
    // };

    // startServer();