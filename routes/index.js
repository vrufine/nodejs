var express = require('express');
var router = express.Router();
var model = require('../models/tasks')();

/* POST new page. */
router.post('/new', (req, res) => {
  var body = req.body;
  model.create(body, (err, task) => {
    err ? res.send("erro") : res.send(task);
  })
});

/* GET ALL new page. */
router.get('/new', (req, res) => {
  model.find((err, tasks) => {
    (err) ? res.send("erro") : res.send(tasks);
  })
});

/* GET ONE new page. */

router.get('/new/:id', (req, res) => {
  model.findById({ _id: req.params.id },
    (err, task) => {
      (err) ? res.send("erro") : res.send(task);
    })
})

/* REMOVE ID  new page. */
router.delete('/new/:id', (req, res) => {
  model.findByIdAndRemove({ _id: req.params.id },
    (err, task) => {
      (err) ? res.send("erro") : res.send("removido");
    })
})

/* PUT ID new page. */
router.put('/new/:id', (req, res) => {
  model.findByIdAndUpdate({ _id: req.params.id }, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    },
  }, (err, task) => {
    (err) ? res.send("erro") : req.send(task);
  })
})

module.exports = router;
