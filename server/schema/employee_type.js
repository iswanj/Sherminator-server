const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const Employee = mongoose.model("employee");

const EmployeeType = new GraphQLObjectType({
  name: "EmployeeType",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    birthday: { type: GraphQLString },
    position: { type: GraphQLString },
    epfNo: { type: GraphQLInt },
    supervisor: {
      type: EmployeeType,
      resolve(parentValue) {
        return Employee.findById(parentValue.supervisor);
      }
    },
    createdAt: { type: GraphQLString },
    casualLeaves: { type: GraphQLInt },
    annualLeaves: { type: GraphQLInt },
    sickLeaves: { type: GraphQLInt }
  })
});

module.exports = EmployeeType;