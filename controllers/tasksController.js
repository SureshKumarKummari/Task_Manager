const Task = require('../models/tasks');


exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ dateCreated: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};


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

exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { taskName, description, priority, dateScheduled, status } = req.body;

  try {
    const updateData = {
      ...(taskName !== undefined && { taskName }),
      ...(description !== undefined && { description }),
      ...(priority !== undefined && { priority }),
      ...(dateScheduled !== undefined && { dateScheduled }),
      ...(status !== undefined && { status }),
    };

    // Set dateCompleted if status is updated to completed
    if (status === 'completed') {
      updateData.dateCompleted = new Date();
    } else if (status) {
      updateData.dateCompleted = null;
    }

    const updatedTask = await Task.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update task' });
  }
};



exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    //console.log("got delete request for task:", id);
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};


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
