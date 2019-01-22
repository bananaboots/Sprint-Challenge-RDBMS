
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'new pull request', notes: 'from branch grace-kang to master', complete: false, project_id: 1},
        {description: 'late project submission', notes: '', complete: false, project_id: 2},
        {description: 'initial commit', notes: 'no changes made', complete: false, project_id: 3}
      ]);
    });
};
