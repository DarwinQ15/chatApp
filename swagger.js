const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0", //standar open api que estas usando
        info: {
            title: "Clon de un chat en node js",
            version: "1.0.0",
            description: "API que sirve para crear una aplicacion de mensajeria. puedes enviar mensajes, crear grupos, crear una conversacion.",
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        './src/routes/conversations.route.js',
        "./src/modules/users.module.js",
    ]
}

const swaggerSpecif = swaggerJSDoc(options);

//funcion para configurar la documentacion

//dos parametros --> app express, puerto donde se ejecuta

const swaggerDocs = (app, port) => {
    //manejador para la ruta de nuestra documentacion.
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecif));
    //podriamos definir nuestra documentacion en formato Json.
    app.get("/api/v1/docs.json", (re1, res)=> {
        res.setHeader("contentType", "application/json");
        res.send(swaggerSpecif);
    });
    console.log(`Dcoumentacion disponible en http://localhost:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;

// lo iniciamos en el server.js
