exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        { id: 1, description: "task1", notes: "note1", completed: false, project_id: 1 },
        { id: 2, description: "task2", notes: "note2", completed: false, project_id: 2 },
        { id: 3, description: "task3", notes: "note3", completed: false, project_id: 3 }
      ]);
    });
};
