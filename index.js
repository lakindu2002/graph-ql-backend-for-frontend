const express = require('express');
const expressGraph = require('express-graphql');
const graphQl = require('graphql');

const { graphqlHTTP } = expressGraph;
const { buildSchema } = graphQl;

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);


const PORT = 4200;

const app = express();

app.use('/graph', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(PORT, () => {
    console.log(`GraphQL API is Up and Running on PORT ${PORT}`);
})