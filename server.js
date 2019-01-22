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

        if (body.complete) {
            body.complete = true;
        } else {
            body.complete = false;
        }
        
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
    });

server.route('/projects/:id')
    .get(async (req, res) => {
        const { id } = req.params;
        try {
            let project = await db.getProject(id);
            const projectActions = await db.getProjectActions(id);
            if (projectActions.length) {
                project[0].actions = projectActions;
            }
            res.status(200).json(project);
        } catch (err) {
            errHandler(err);
        }
    })
    .put(async (req, res) => {
        const { id } = req.params;
        try {
            const updated = await db.editProject(id, req.body);
            res.status(201).json(updated);
        } catch (err) {
            errHandler(err);
        }
    });

server.route('/actions')
    .get(async (req, res) => {
        try {
            const actions = await db.getActions();
            res.status(200).json(actions);
        } catch (err) {
            errHandler(err);
        }
    })
    .post(async (req, res) => {
        const { body } = req;

        if (body.complete) {
            body.complete = true;
        } else {
            body.complete = false;
        }

        if (body.name) {
            try {
                const id = await db.addAction(body);
                const newAction = await db.getActions(id[0]);
                res.status(201).json(newAction);
            } catch (err) {
                errHandler(err);
            }
        } else {
            res.status(400).json({
                message: 'Please add a valid name for this action.'
            })
        }
    })

module.exports = server;