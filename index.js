const express = require('express');
const expressGraph = require('express-graphql');
const { graphqlHTTP } = expressGraph;

const schema = require('./schemas/schema');

const app = express();
const PORT = 4000;

app.use('/graph', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(PORT, () => {
    console.log(`Graph QUL API is up and running on Port ${PORT}`);
})