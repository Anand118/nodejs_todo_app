import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "backendapi", })
        .then(() => console.warn("Database Connected"))
        .catch((e) => console.warn(e));
};
