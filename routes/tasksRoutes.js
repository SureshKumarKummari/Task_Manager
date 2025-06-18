const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController');


router.get('/', taskController.getAllTasks);


router.get('/:status', taskController.getTasksByStatus); 


router.post('/', taskController.createTask);


router.patch('/:id', taskController.updateTaskStatus);

router.delete('/:id', taskController.deleteTask);

module.exports = router;
