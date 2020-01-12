exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "resource1", description: "description1" },
        { id: 2, name: "resource2", description: "description2" },
        { id: 3, name: "resource3", description: "description3" }
      ]);
    });
};
