import express from "express";
import workerRoutes from "./routes/worker.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Tsehay Gig Worker API");
});

// connect worker routes
app.use("/api/workers", workerRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Tsehay server running on port ${PORT}`);
});