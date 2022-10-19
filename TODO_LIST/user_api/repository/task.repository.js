// CRUD operations
const crypto = require('crypto');
const { connect } = require('../config/db.config');
const { Task } = require('../model/task.model');
const logger = require('../logger/api.logger');

class TaskRepository {
  constructor() {
    connect();
  }

  async getAllTasks() {
    const tasks = await Task.find({});
    console.log("tasks:", tasks)
    return tasks;
  }
  async createTask(task, err) {
    task._id = crypto.randomBytes(32).toString('hex');
    console.log("task in repository:", task)
    try {
      await Task.create(task);
    } catch {
      logger.error('Error:' + err)
    }
    return task;
  }
  async updateTask(id, task) {
    try {
      await Task.updateOne({ _id: id }, { $set: task })
    } catch {
      logger.error('Error:' + err)
    }
    return task;
  }

  async deleteTask(taskId) {
    let data = {};
    try {
      data = await Task.deleteOne({ _id: taskId })
    } catch {
      logger.error('Error:' + err)
    }
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new TaskRepository();
