const express = require('express');
const server = express();

const db = require('./data/db');
const errHandler = require('./errHandler');

server.use(express.json());

server.route('/projects')
    .get(async (req, res) => {
        try {
            const projects = await db.getProject();
            res.status(200).json(projects);
        } catch (err) {
            errHandler(err);
        }
    })
    .post(async (req, res) => {
        let { body } = req;
        if (body.name) {
            try {
                const id = await db.addProject(body);
                const newProject = await db.getProject(id[0]);
                res.status(201).json(newProject);
            } catch (err) {
                errHandler(err);
            }
        } else {
            res.status(400).json({
                message: 'Please add a valid name for this project.'
            })
        }
    })

// get project by ID
server.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const project = await db.getProject(id);
        res.status(200).json(project);
    } catch (err) {
        errHandler(err);
    }
});

// post project
server.get('/projects')

module.exports = server;