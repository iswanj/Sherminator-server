const mongoose = require("mongoose");
const graphql = require("graphql");

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const EmployeeType = require("./employee_type");
const Employee = mongoose.model("employee");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve() {
        return Employee.find({});
      }
    },
    employee: {
      type: EmployeeType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Employee.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
