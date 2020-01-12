exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "project1", description: "some description", completed: false },
        { id: 2, name: "project2", description: "some description", completed: false },
        { id: 3, name: "project3", description: "some description", completed: false }
      ]);
    });
};
