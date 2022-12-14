const taskService = require('../services/task.service')
const logger = require('../logger/api.logger');

class TaskController {
  async getAllTasks() {
    logger.info('Controller: get all tasks');
    return await taskService.getAllTasks();
  }

  async createTask(task) {
    logger.info('Controller: create a task', task);
    return await taskService.createTask(task);
  }

  async updateTask(id, task) {
    logger.info('Controller: update a task', task);
    return await taskService.updateTask(id, task);
  }

  async deleteTask(taskId) {
    logger.info('Controller: delete a task', taskId);
    return await taskService.deleteTask(taskId);
  }
}

module.exports = new TaskController();