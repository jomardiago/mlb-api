import { GraphQLList, GraphQLNonNull } from 'graphql';
import { EntityType, EntityTypes } from './base';
import { entityByType } from '../commonSchema';
import { entityDb } from '../../dbs';

export const Entity = {
    name: 'Entity',
    description: 'Query for entities by Entity Type',
    type: new GraphQLList(EntityType),
    args: {
        type: {
            type: new GraphQLNonNull(EntityTypes),
            description: 'The type of entity'
        }
    },
    resolve: (_, { type }) => (
        entityByType({ key: type }, entityDb)
    )
};