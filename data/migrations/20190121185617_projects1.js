
exports.up = function(knex, Promise) {

    return knex.schema.createTable('projects', tbl => {
        // primary
        tbl.increments('id');
        // other columns
        tbl.string('name', 256).unique().notNullable();
        tbl.text('description');
        tbl.boolean('complet').notNullable();

    });
};

exports.down = function(knex, Promise) {
    
    return knex.schema.dropTableIfExists('projects');

};
