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
const EmployeeType = require("./employee_type");

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
        sickLeaves: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        return new Employee(args).save();
      }
    }
  }
});

module.exports = mutation;
