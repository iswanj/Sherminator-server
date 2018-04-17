const graphql = require("graphql");
const mongoose = require("mongoose");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} = graphql;
const Employee = mongoose.model("employee");
const Attendance = mongoose.model("attendance");
const EmployeeType = require("./employee_type");
const AttendanceType = require("./attendance_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        birthday: { type: GraphQLString },
        position: { type: GraphQLString },
        epfNo: { type: new GraphQLNonNull(GraphQLInt) },
        supervisor: { type: GraphQLID },
        createdAt: { type: GraphQLString },
        casualLeaves: { type: GraphQLInt },
        annualLeaves: { type: GraphQLInt },
        sickLeaves: { type: GraphQLInt },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return new Employee(args).save();
      }
    },
    markAttendance: {
      type: AttendanceType,
      args: {
        type: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        time: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLInt },
        employee: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, args) {
        return new Attendance(args).save();
      }
    }
  }
});

module.exports = mutation;
