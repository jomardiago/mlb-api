import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { Entity } from './api/entity';
import { TeamType } from './api/entity/team';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        description: 'The root query objects',
        fields: () => ({
            'entities': Entity
        })
    }),
    types: [
        TeamType
    ]
});

export default schema;