const knex = require('knex');
const knexfile = require('../knexfile');

const db = knex(knexfile.development);

module.exports = {
    
    getProject: id => {
        if (id) {
            return db.select().from('projects').where({ id });
        } else {
            return db.select().from('projects');
        }
    },

    addProject: project => {
        return db.insert(project).into('projects');
    }

}