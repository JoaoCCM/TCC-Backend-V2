const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require("morgan");
const swaggerJsdocs = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            // swagger: "2.0",
            title: 'Connect<IF>',
            // version: "1.0.0",
            description: 'Connect<IF> API information',

            servers: [`http://localhost:5000`],
        },
        // components: {
        //     securitySchemes: {
        //         bearerAuth: {
        //             type: 'http',
        //             scheme: 'bearer',
        //             bearerFormat: 'JWT',
        //         },
        //     },
        // },
        // security: [
        //     {
        //         bearerAuth: [],
        //     },
        // ],
    },
    apis: ['./routes/*.js'],
}
const swaggerDocs = swaggerJsdocs(swaggerOptions)


module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(helmet());
    app.use(logger("dev"));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}