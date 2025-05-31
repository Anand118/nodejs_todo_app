import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "backendapi", })
        .then((c) => console.warn(`Database Connected ${c.connection.host}`))
        .catch((e) => console.warn(e));
};
