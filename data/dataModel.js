const db = require("./dbConfig");

function getAllResources() {
  return db("resources");
}

function getAllProjects() {
  return db("projects");
}

function getAllTasks() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("t.*", "p.name as project_name", "p.description as project_description");
}

function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTasksById(id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("t.*", "p.name as project_name", "p.description as project_description")
    .where({ id });
}

function getTasksByProjectId(project_id) {
  return db("tasks").where({ project_id });
}

function getResourcesByProjectId(project_id) {
  return db("resources").where({ project_id });
}


exports.module = {
  // MVP
  getAllResources,
  getAllProjects,
  getAllTasks,

  getResourceById,
  getProjectById,
  getTasksById,

  getTasksByProjectId,
  getResourcesByProjectId,

  addProject,
  addResource,
  addTask

  // Stretch
  // updateProjectById,
  // updateResourceById,
  // updateTaskById,
  // deleteProjectById,
  // deleteResourceById,
  // deleteTaskById
};
