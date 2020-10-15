const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require("morgan");

module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(helmet());
    app.use(logger("dev"));
}