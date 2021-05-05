import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { EntityType, queryFields } from './base';

const fields = {
    name: { type: new GraphQLNonNull(GraphQLString), description: 'The name of the team' },
    city: { type: new GraphQLNonNull(GraphQLString), description: 'The city where the team is located' },
    alias: { type: new GraphQLNonNull(GraphQLString), description: 'The alias or what the team is called' }
};

export const TeamType = new GraphQLObjectType({
    name: 'team',
    interfaces: [EntityType],
    fields: Object.assign({}, queryFields, fields),
    isTypeOf: value => value.type === 'team' ? TeamType : null
});