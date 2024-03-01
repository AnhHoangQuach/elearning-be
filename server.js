const app = require("./app");
const port = process.env.PORT || 3000;
const passport = require("./src/middlewares/passport.middleware");
const ConnectRedis = require("./src/configs/redis.config");
const ConnectMongoDB = require("./src/configs/mongo.config");

const server = app.listen(port, async () => {
  const dev = app.get("env") !== "production";
  // connect redis
  global._redis = await ConnectRedis();
  // connect mongo db
  const MONGO_URI = process.env.MONGO_URI;
  ConnectMongoDB(MONGO_URI);
  console.log("> Server is up and running on port : " + port);
});
