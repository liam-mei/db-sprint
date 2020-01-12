const express = require("express");
const db = require("./data/dataModel");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    res.json(await db.getAllProjects());
  } catch (err) {
    next(err);
  }
});

router.get("/resources", async (req, res, next) => {
  try {
    res.json(await db.getAllResources());
  } catch (err) {
    next(err);
  }
});

router.get("/tasks", async (req, res, next) => {
  try {
    res.json(await db.getAllTasks());
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id", async (req, res, next) => {
  try {
    res.json(await db.getProjectById(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.get("/resources/:id", async (req, res, next) => {
  try {
    res.json(await db.getResourcesById(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.get("/tasks/:id", async (req, res, next) => {
  try {
    res.json(await db.getTasksById(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.get("/project/resources/:id", async (req, res, next) => {
  try {
    res.json(await db.getResourcesByProjectId(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.get("/project/tasks/:id", async (req, res, next) => {
  try {
    res.json(await db.getTasksByProjectId(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.get("/complete/:id", async (req, res, next) => {
  try {
    res.json(await db.getCompleteProjectById(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post("/projects", async (req, res, next) => {
  try {
    res.json(await db.addProject(req.body));
  } catch (err) {
    next(err);
  }
});
router.post("/resources", async (req, res, next) => {
  try {
    res.json(await db.addResource(req.body));
  } catch (err) {
    next(err);
  }
});
router.post("/tasks", async (req, res, next) => {
  try {
    res.json(await db.addTask(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
