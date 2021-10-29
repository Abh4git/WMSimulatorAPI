//const { verifySignUp } = require("./middlewares");
const controller = require("../controllers/enginecontroller");

const cors = require ('cors');
const bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  var corsOptions = {
    origin: true
  };
  app.get("/api/engine", cors(corsOptions), jsonParser, controller.getEngineCurrentState);
  app.post("/api/engine", cors(corsOptions), jsonParser, controller.startEngineOperation);
  app.put("/api/engine", cors(corsOptions), jsonParser, controller.stopEngineOperation);
};
