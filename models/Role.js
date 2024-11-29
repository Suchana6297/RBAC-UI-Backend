const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  resource: {
    type: String,
    required: true
  },
  actions: [{
    type: String,
    enum: ['create', 'read', 'update', 'delete'],
    required: true
  }]
});

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  permissions: [permissionSchema],
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Role', roleSchema);