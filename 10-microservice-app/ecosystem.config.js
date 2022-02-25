const path = require("path");

const basePath = path.join(__dirname, "/packages")

module.exports = {
  apps : [{
    name : "Gateway",
    script: basePath + "/gateway/server.js",
    watch: true,
    env : { 
      PORT : 9000,
      DB_SERVICE_PORT : 4000
    }
  }, {
    name : "Database Service",
    script: basePath + "/database_service/server.js",
    watch: true,
    env : {
      PORT : 4000
    }
  }]
};
