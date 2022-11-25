import { Home } from "../controllers";

const express = require("express");
const router = express.Router();

router.get("/", Home);

export default router;
