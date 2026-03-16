import fs from "fs";

const filePath = "./src/data/workers.json";

// read workers
const readWorkers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// write workers
const writeWorkers = (workers) => {
  fs.writeFileSync(filePath, JSON.stringify(workers, null, 2));
};

// create worker
export const createWorker = (worker) => {
  const workers = readWorkers();

  // generate worker id
  const generateId = (skill, workers) => {
    const letter = skill[0].toUpperCase();
    const sameSkillWorkers = workers.filter(
      w => w.skill[0].toUpperCase() === letter
    );
    const number = sameSkillWorkers.length + 1;
    const padded = String(number).padStart(3, "0");
    return letter + padded;
  };

  // assign id to new worker
  const newWorker = {
    ...worker,
    id: generateId(worker.skill, workers)
  };

  workers.push(newWorker);
  writeWorkers(workers);

  return newWorker;
};

// get all workers
export const getWorkers = () => {
  return readWorkers();
};

// delete worker
export const deleteWorker = (id) => {
  let workers = readWorkers();
  workers = workers.filter(worker => worker.id != id);
  writeWorkers(workers);
  return workers;
};

// search workers
export const searchWorkers = (query) => {
  const workers = readWorkers();
  return workers.filter(worker => {
    if (query.skill && worker.skill !== query.skill) return false;
    if (query.location && worker.location !== query.location) return false;
    return true;
  });
};