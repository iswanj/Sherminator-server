const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const Employee = mongoose.model("employee");
const EmployeeType = require("./employee_type");

const AttendanceType = new GraphQLObjectType({
  name: "AttendanceType",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString },
    date: { type: GraphQLInt },
    time: { type: GraphQLString },
    status: { type: GraphQLString },
    employee: {
      type: EmployeeType,
      resolve(parentValue) {
        return Employee.findById(parentValue.employee);
      }
    }
  })
});

module.exports = AttendanceType;
