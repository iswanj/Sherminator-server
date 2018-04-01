const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
  type: { type: String },
  date: { type: Date },
  time: { type: Date },
  status: { type: Number, default: 1 }, // pending = 1, approved = 2, rejected = 3
  employee: {
    type: Schema.Types.ObjectId,
    ref: "employee"
  }
});

AttendanceSchema.static.changeApproval = (id, statusValue) => {
  const Attendance = mongoose.model("attendance");

  return Attendance.findById(id).then(attendance => {
    attendance.status = statusValue;
    return attendance.save();
  });
};

mongoose.model("attendance", AttendanceSchema);
