import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect(
      "mongodb+srv://smsathana12_db_user:XwZNtBLAEAzwHU3q@cluster0.1drispo.mongodb.net/neethivaan"
    );

    console.log("MongoDB Atlas Connected");

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;