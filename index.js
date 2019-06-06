const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();
server.use(helmet());
server.use(express.json());

// [POST] /api/cohorts This route should save a new cohort to the database.
//---------------------------------------------------------------------------------//

server.post('/api/cohorts', (req, res) => {

});

// [GET] /api/cohorts This route will return an array of all cohorts.
//---------------------------------------------------------------------------------//

server.get('/api/cohorts', (req, res) => {

    db('cohorts')
    .then(cohort => {
        res.status(200).json(cohort);
    })
    .catch(err => {
        res.status(404).json(err);
    })

});

// [GET] /api/cohorts/:id This route will return the cohort with the matching id.
//---------------------------------------------------------------------------------//

server.get('/api/cohorts/:id', (req, res) => {

});

// [GET] /api/cohorts/:id/students returns all students for the cohort with the specified id.
//---------------------------------------------------------------------------------//

server.get('/api/cohorts/:id/students', (req, res) => {

});

// [PUT] /api/cohorts/:id This route will update the cohort with the matching id using information sent in the body of the request.
//---------------------------------------------------------------------------------//

server.put('/api/cohorts/:id', (req, res) => {

    db('cohorts')
    .where({id: req.params.id})
    .update(req.body)
    .then(count => {
        if (count > 0) {
            // return the count or the newly updated from database
            db('zoos')
            .where({id: req.params.id})
            .first()
            .then(animal => {
                res.status(200).json({animal})
            })
        } else {
            res.status(500).json({message: "Zoo Animal not found!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })

});

// [DELETE] /api/cohorts/:id This route should delete the specified cohort.
//---------------------------------------------------------------------------------//

server.delete('/api/cohorts/:id', (req, res) => {
    
    db('cohorts')
    .where({id: req.params.id})
    .del()
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "Destruction Imminent."})
        } else {
            res.status(404).json({message: "Animal not found!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

//---------------------------------------------------------------------------------//

const port = process.env.PORT || 6000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
