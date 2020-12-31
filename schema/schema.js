const graphql = require('graphql')

// nom the function
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// define new Book type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // query for a particular book
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      // the resolve function once you receive the query
      resolve(parent, args) {
        args.id
        // code to get data from db or other source
      }
    }
  }
})

module.exports = new GraphQLSchema({
  // pass through initial root query
  query: RootQuery
})