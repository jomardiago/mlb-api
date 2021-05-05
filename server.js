import express from 'express';
import config from 'config';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const PORT = config.server.port || 9000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const graphHttp = graphqlHTTP({
    schema,
    graphiql: true
});

app.use('/graphql', graphHttp);

app.listen(PORT, () => console.log(`Server started and listening on port ${PORT}`));