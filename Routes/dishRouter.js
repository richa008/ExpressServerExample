const express = require("express");

const dishRouter = express.Router();

dishRouter.route("/")
.all((request, response, next) => { // executes for all, get, put, post etc 
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    next(); // response gets passed to to all, get, post etc
})
.get((request, response, next) => {
    response.end("Sends get response");
})
.post((request, response, next) => {
    respose.end("Will send post response");
});

module.exports = dishRouter;