import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://praneethbadeti:Praneeth2006@ac-hlnt7pc-shard-00-00.nd56per.mongodb.net:27017,ac-hlnt7pc-shard-00-01.nd56per.mongodb.net:27017,ac-hlnt7pc-shard-00-02.nd56per.mongodb.net:27017/?ssl=true&replicaSet=atlas-jg2jyp-shard-0&authSource=admin&appName=Cluster0');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1);
  }
}
