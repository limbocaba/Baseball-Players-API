import { Router } from "express";

import apiRoutes from "./api-routes.js"
const router = Router()

router.get("/", (req, res) => res.send("Root"))
router.use("/", apiRoutes)

export default router

