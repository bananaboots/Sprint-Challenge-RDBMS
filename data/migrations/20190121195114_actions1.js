
exports.up = function(knex, Promise) {

    return knex.schema.createTable('actions', tbl => {
        // primary
        tbl.increments('id');
        // other columns
        tbl.text('description');
        tbl.text('notes');
        tbl.boolean('complete').notNullable();
        // foreign key
        tbl.integer('project_id').unsigned().references('id').inTable('projects').notNullable();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('actions');

};
