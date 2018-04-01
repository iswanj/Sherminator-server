const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
  type: { type: String },
  date: { type: Date },
  time: { type: Date },
  status: { type: Number }, // pending = 1, approved = 2, rejected = 3
  employee: {
    type: Schema.Types.ObjectId,
    ref: "employee"
  }
});

mongoose.model("attendance", AttendanceSchema);