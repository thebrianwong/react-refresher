/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query GetAllPokemonStockPairs {\n  pokemonStockPair {\n    id\n    pokemon {\n      name\n      spriteUrl\n    }\n    stock {\n      symbol\n    }\n  }\n}\n\nquery GetPokemonStockPair($id: ID) {\n  pokemonStockPair(id: $id) {\n    pokemon {\n      name\n      pokedexNumber\n      spriteUrl\n      type1 {\n        spriteUrl\n        type\n      }\n      type2 {\n        spriteUrl\n        type\n      }\n    }\n    stock {\n      name\n      price\n      symbol\n    }\n  }\n}": types.GetAllPokemonStockPairsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllPokemonStockPairs {\n  pokemonStockPair {\n    id\n    pokemon {\n      name\n      spriteUrl\n    }\n    stock {\n      symbol\n    }\n  }\n}\n\nquery GetPokemonStockPair($id: ID) {\n  pokemonStockPair(id: $id) {\n    pokemon {\n      name\n      pokedexNumber\n      spriteUrl\n      type1 {\n        spriteUrl\n        type\n      }\n      type2 {\n        spriteUrl\n        type\n      }\n    }\n    stock {\n      name\n      price\n      symbol\n    }\n  }\n}"): (typeof documents)["query GetAllPokemonStockPairs {\n  pokemonStockPair {\n    id\n    pokemon {\n      name\n      spriteUrl\n    }\n    stock {\n      symbol\n    }\n  }\n}\n\nquery GetPokemonStockPair($id: ID) {\n  pokemonStockPair(id: $id) {\n    pokemon {\n      name\n      pokedexNumber\n      spriteUrl\n      type1 {\n        spriteUrl\n        type\n      }\n      type2 {\n        spriteUrl\n        type\n      }\n    }\n    stock {\n      name\n      price\n      symbol\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;