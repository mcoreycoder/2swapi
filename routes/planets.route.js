import express from "express";
import planetsController from "../controllers/planets.controller"
const router = express.Router()

router.get('/', (req, res) => {
    planetsController.getAll(req, res);
});

export default router;