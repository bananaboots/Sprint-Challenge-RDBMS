const express = require('express');
const server = express();

const db = require('./data/db');
const errHandler = require('./errHandler');

server.use(express.json());

// get all projects
server.get('/projects', async (req, res) => {
    try {
        const projects = await db.getProject();
        res.status(200).json(projects);
    } catch (err) {
        errHandler(err);
    }
});

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

module.exports = server;