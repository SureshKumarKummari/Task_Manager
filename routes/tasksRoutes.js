const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController');

// Get all tasks
router.get('/', taskController.getAllTasks);

// Get pending tasks
router.get('/:status', taskController.getTasksByStatus); 

// Create a new task
router.post('/', taskController.createTask);

// Update task status
router.patch('/:id/status', taskController.updateTaskStatus);

// Delete task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
