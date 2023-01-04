// import { Promise } from "bluebird";
import { createServer } from "http";
import path from "path";
import express, { Application} from "express";
import router from "./api/routes/index";
import configs from "./config/vars";

const app: Application = express();
const httpServer = createServer(app);

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(router);
app.use(express.static(path.join(__dirname, "public")))
httpServer.listen(configs.port, function () {
  console.log(`App is listening on port ${configs.port} !`);
});

export default app;
