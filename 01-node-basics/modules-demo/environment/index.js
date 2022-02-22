require("dotenv").config();

const env = process.env.ENVIRONMENT;

module.exports =
  env === "DEVELOPMENT"
    ? require("./dev.environment")
    : require("./prod.environment");
