const express = require('express');
const router = express.Router();

//Controllers
const TaskController = require('../controller/TaskController');

//Middlewares
const TaskValidation = require('../middlewares/TaskValidation');

//Create
router.post('/', TaskValidation, TaskController.create);

//Update :id
router.put('/:id', TaskValidation, TaskController.update);

//Delete
router.delete('/:id', TaskController.delete);

//Update :id :done
router.put('/:id/:done', TaskController.done);


//Filter All
router.get('/filter/all/:macaddress', TaskController.all);
//Filter Show :id
router.get('/filter/:id', TaskController.show);
//Filter late
router.get('/filter/late/:macaddress', TaskController.late);
//Filter today
router.get('/filter/today/:macaddress', TaskController.today);
//Filter week
router.get('/filter/week/:macaddress', TaskController.week);
//Filter month
router.get('/filter/month/:macaddress', TaskController.month);
//Filter year
router.get('/filter/year/:macaddress', TaskController.year);


module.exports = router;