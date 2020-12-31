const graphql = require('graphql')

// nom the function
const { GraphQLObjectType, GraphQLString } = graphql

// define new Book type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})


