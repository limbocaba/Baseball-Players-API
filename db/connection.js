import mongoose from "mongoose";

import chalk from "chalk";

// mongoose.set("returnOrignial", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/players")
  .catch((err) => {
    console.log(`Error connection go MongoDB: ${err.message}`);
  });

mongoose.connection.on("disconnected",
  () => {
    console.log(chalk.bold("Disconnected from MongoDB!"));
  });

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDb connection errr: ${err}`));
});

export default mongoose.connection;
