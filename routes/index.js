const eventRoute = require("./event.routes");
const jobRoutes = require("./job.routes");
const postRouter = require("./post.routes");
const userRouter = require("./user.routes");

module.exports = { userRouter, postRouter, eventRoute, jobRoutes };
