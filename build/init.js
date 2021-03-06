"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./db");

var _app = _interopRequireDefault(require("./app"));

require("./models/Comment");

require("./models/Video");

require("./models/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var PORT = process.env.PORT || 4000;

var handleListening = function handleListening() {
  return console.log("\uD83D\uDE18Listening on: http://localhost:".concat(PORT));
};

_app.default.listen(PORT, handleListening);