const app = require("./expressServer.js");

const subscribersRouter = require('./expressRoutes/subscribers.js');
app.use('/subscribers', subscribersRouter);

const dataBase = require("./mongoDatabase.js");