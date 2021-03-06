const express = require('express');

const IncidentController = require('./controllers/IncidentController');

const OngController = require('./controllers/OngController');

const ProfileController = require('./controllers/ProfilerController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profilers', ProfileController.index);

routes.post('/sessions', SessionController.create);


module.exports = routes;