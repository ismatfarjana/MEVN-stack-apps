// Define schema
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  _id: 'string',
  name: 'string',
  description: 'string',
  createDate: 'date',
  updateDate: 'date',
  createdBy: 'string',
  updateBy: 'string',
},
  {
    timestamps: {
      createDate: 'created_at',
      updateDate: 'updated_at'
    }
  }
);

const Task = mongoose.model('tasks', taskSchema, 'tasks');

module.exports = {
  Task
}