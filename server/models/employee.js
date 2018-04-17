const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  birthday: { type: Date },
  position: { type: String },
  epfNo: { type: Number },
  supervisor: {
    type: Schema.Types.ObjectId,
    ref: "employee"
  },
  createdAt: { type: Date, default: Date.now },
  casualLeaves: { type: Number },
  annualLeaves: { type: Number },
  sickLeaves: { type: Number },
  email: { type: String },
  password: { type: String, default: "abc123" }
});

mongoose.model("employee", EmployeeSchema);
