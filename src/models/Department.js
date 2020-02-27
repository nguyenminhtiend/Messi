const { Schema, model } = require('mongoose');

const departmentSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);
const Department = model('Department', departmentSchema);

module.exports = Department;
