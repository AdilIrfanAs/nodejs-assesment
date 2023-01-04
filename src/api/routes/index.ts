import { Router } from "express";
import { homepage,homepageData } from "./../controllers/index.controller";
const indexRouter = Router();

indexRouter.route("/").get(homepage);
indexRouter.route("/data").get(homepageData);

export default indexRouter;
