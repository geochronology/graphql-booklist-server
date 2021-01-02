const graphql = require('graphql')
const _ = require('lodash')

// nom the function
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID
} = graphql

// dummy data
const books = [
  { name: 'Name of the wind', genre: 'Fantasy', id: '1' },
  { name: 'the final empire', genre: 'Fantasy', id: '2' },
  { name: 'The long earth', genre: 'Sci-Fi', id: '3' },
]

// define new Book type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
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
      args: { id: { type: GraphQLID } },
      // the resolve function once you receive the query
      resolve(parent, args) {
        // args.id
        // code to get data from db or other source
        return _.find(books, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  // pass through initial root query
  query: RootQuery
})
