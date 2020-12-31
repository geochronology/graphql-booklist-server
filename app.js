const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

// add graphql express route handler
app.use('/graphql', graphqlHTTP({
  // define options
  schema
}))

app.listen(5000, () => {
  console.log('server is live on port 5000')
})





























