import { GraphQLEnumType, GraphQLInterfaceType, GraphQLList, GraphQLString } from 'graphql';

const EntityTypeValues = {
    'team': { value: 'team' },
    'player': { value: 'player' },
    'position': { value: 'position' }
}

export const EntityTypes = new GraphQLEnumType({
    name: 'EntityTypes',
    values: EntityTypeValues
});

export const EntityType = new GraphQLInterfaceType({
    name: 'Entity',
    description: 'The entity of many types',
    fields: {
        id: { type: GraphQLString, description: 'The ID of the entity' },
        rev: { type: GraphQLString, description: 'The revision of the entity record' },
        type: { type: EntityTypes, description: 'The type of the entity' },
        chain: { type: new GraphQLList(GraphQLString), description: 'The IDs of entities this entity belongs to' }
    }
});

export const queryFields = {
    id: { type: GraphQLString, description: 'The ID of the entity', resolve: it => it._id },
    rev: { type: GraphQLString, description: 'The revision of the entity record', resolve: it => it._rev },
    type: { type: EntityTypes, description: 'The type of the entity' },
    chain: { type: new GraphQLList(GraphQLString), description: 'The IDs of entities this entity belongs to' }
};