const { connect } = require('../config/db.config');
const { Task } = require('../model/task.model');
const logger = require('../logger/logger');

class TaskRepository {
  constructor() {
    connect();
  }

  async getAllTasks() {
    const tasks = await Task.find({});
    console.log("tasks:", tasks)
    return tasks;
  }
  async createTask(task) {
    let data = {};
    try {
      data = await Task.create(task)
    } catch {
      logger.error('Error:' + err)
    }
    return data;
  }
  async updateTask(task) {
    let data = {};
    try {
      data = await Task.updateOne(task)
    } catch {
      logger.error('Error:' + err)
    }
    return data;
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
