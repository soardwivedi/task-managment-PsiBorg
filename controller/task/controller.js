const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
      createdBy: req.user._id
    });
    res.status(201).json({ message: 'Task created', task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createTask };
