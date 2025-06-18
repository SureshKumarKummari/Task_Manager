const Task = require('../models/tasks');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ dateCreated: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { taskName, description, priority, dateScheduled } = req.body;

  try {
    console.log(req.body);
    const newTask = new Task({
      taskName,
      description: description || '',
      priority: priority || 'medium',
      dateScheduled: dateScheduled || null,
      status: 'pending'
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: 'Failed to create task' });
  }
};

// Update task status (and set dateCompleted if completed)
exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    console.log("got update request for task:", id, "with status:", status);
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        status,
        dateCompleted: status === 'completed' ? new Date() : null
      }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update task status' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

// Get tasks by status
exports.getTasksByStatus = async (req, res) => {
  const { status } = req.params;

  try {
    console.log("Fetching tasks with status:", status);
    const tasks = await Task.find({ status }).sort({ dateCreated: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks by status' });
  }
};
