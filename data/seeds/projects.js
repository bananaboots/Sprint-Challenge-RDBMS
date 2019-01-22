exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'RDBMS', description: 'creating databases and tables', complete: false},
        {name: 'Data Modeling 1', description: 'data relationships and normalizing the model', complete: false},
        {name: 'Sprint Challenge', description: 'Friday project for RDBMS week', complete: false}
      ]);
    });
};
