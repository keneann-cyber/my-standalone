import * as workerService from "../services/worker.service.js";
import { validateWorker } from "../utils/validator.js";

// Abebech adds worker
export const addWorker = (req, res) => {
  const validationError = validateWorker(req.body);

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const worker = workerService.createWorker(req.body);

  res.status(201).json({
    message: "Worker added successfully",
    worker
  });
};

// list workers
export const getWorkers = (req, res) => {
  const workers = workerService.getWorkers();
  res.json(workers);
};

// Abebech deletes worker
export const deleteWorker = (req, res) => {
  const id = req.params.id;
  const workers = workerService.deleteWorker(id);

  res.json({
    message: "Worker deleted",
    workers
  });
};

// random user search
export const searchWorkers = (req, res) => {
  const result = workerService.searchWorkers(req.query);
  res.json(result);
};