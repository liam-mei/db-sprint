const db = require("./dbConfig");
const helpers = require("./helpers");

function getAllResources() {
  return db("resources");
}

async function getAllProjects() {
  const projects = await db("projects");
  return helpers.convertArrayToBool(projects);
}

async function getAllTasks() {
  const tasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("t.*", "p.name as project_name", "p.description as project_description");
  return helpers.convertArrayToBool(tasks);
}

function getResourcesById(id) {
  return db("resources")
    .where({ id })
    .first();
}

async function getProjectById(id) {
  const data = await db("projects")
    .where({ id })
    .first();
  return helpers.convertObjToBool(data);
}

async function getTasksById(id) {
  const data = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("t.*", "p.name as project_name", "p.description as project_description")
    .where({ "t.id": id })
    .first();
  return helpers.convertObjToBool(data);
}

function getTasksByProjectId(project_id) {
  return db("tasks").where({ project_id });
}

function getResourcesByProjectId(project_id) {
  return db("projects_resources as pr")
    .where({ "pr.project_id": project_id })
    .join("resources as r", "r.id", "pr.resource_id")
    .select('r.*');
}

async function getCompleteProjectById(project_id) {
  const promiseArray = [
    getProjectById(project_id),
    getResourcesByProjectId(project_id),
    getTasksByProjectId(project_id)
  ];

  const [resolvedProject, resolvedResources, resolvedTasks] = await Promise.all(promiseArray);

  const boolProject = helpers.convertObjToBool(resolvedProject)
  const boolTasks = helpers.convertArrayToBool(resolvedTasks);

  return { ...boolProject, resources: resolvedResources, tasks: boolTasks };
}

async function addProject(project) {
  const [id] = await db("projects").insert(project);
  return getProjectById(id);
}

async function addResource(resource) {
  const [id] = await db("resources").insert(resource);
  return getResourcesById(id);
}

async function addTask(task) {
  const [id] = await db("tasks").insert(task);
  return getTasksById(id);
}

module.exports = {
  // MVP
  getAllResources,
  getAllProjects,
  getAllTasks,

  getResourcesById,
  getProjectById,
  getTasksById,

  getTasksByProjectId,
  getResourcesByProjectId,

  getCompleteProjectById,

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
