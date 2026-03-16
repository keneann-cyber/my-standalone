import express from "express";

import {
  addWorker,
  getWorkers,
  deleteWorker,
  searchWorkers
} from "../controllers/worker.controller.js";

const router = express.Router();

// Abebech adds worker
router.post("/", addWorker);

// get all workers
router.get("/", getWorkers);

// delete worker
router.delete("/:id", deleteWorker);

// random user search
router.get("/search", searchWorkers);

export default router;