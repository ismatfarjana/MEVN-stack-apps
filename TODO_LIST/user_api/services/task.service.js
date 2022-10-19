// Define Task service for Data manipulation
const taskRepository = require('../repository/task.repository');

class TaskService {
  constructor() { }

  async getAllTasks() {
    return await taskRepository.getAllTasks();
  }
  async createTask(task) {
    return await taskRepository.createTask(task);
  }
  async updateTask(id, task) {
    return await taskRepository.updateTask(id, task);
  }
  async deleteTask(taskId) {
    return await taskRepository.deleteTask(taskId);
  }
}

module.exports = new TaskService();