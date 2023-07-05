let express = require("express");
let Queue = require("bull");

// Serve on PORT on Heroku and on localhost:5000 locally
let PORT = process.env.PORT || "5000";
// Connect to a local redis intance locally, and the Heroku-provided URL in production
let REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

let app = express();

// Create / Connect to a named work queue
let workQueue = new Queue("work", REDIS_URL);

// Kick off a new job by adding it to the work queue
app.post("/job", async (req, res) => {
  // This would be where you could pass arguments to the job
  // Ex: workQueue.add({ url: 'https://www.heroku.com' })
  // Docs: https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd

  let job = await workQueue.add({
    typeOperation: "Insert",
    typeClient: "Employee",
    data: { id: Math.random(), name: "Jhonn" },
  });
  res.json({ id: job.id });
});

// Allows the client to query the state of a background job
app.get("/job/:id", async (req, res) => {
  let id = req.params.id;
  let job = await workQueue.getJob(id);

  if (job === null) {
    res.status(404).end();
  } else {
    let state = await job.getState();
    let progress = job._progress;
    let reason = job.failedReason;
    res.json({ id, state, progress, reason });
  }
});

// You can listen to global events to get notified when jobs are processed
workQueue.on("global:completed", (jobId, result) => {
  console.log("Job completed with result: ", { result, jobId });
});

workQueue.on("global:failed", (error) => {
  console.error("Error de la cola:", { error });
});

app.listen(PORT, () => console.log("Server started!"));
