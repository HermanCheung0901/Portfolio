import mongoose from "mongoose";

const connect = async () => {
  
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo connection successful");
  } catch (err) {
    throw new Error("Error in connecting to MongoDB");
  };
}

export default connect;