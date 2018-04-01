const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
  date: { type: Date },
  halfday: { type: Boolean, default: false },
  status: { type: Number }, // assignee-approved = 20, pm-approved = 25, admin-approved = 30
  assignee: {
    type: Schema.Types.ObjectId,
    ref: "employee"
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "employee"
  }
});

mongoose.model("leave", LeaveSchema);
