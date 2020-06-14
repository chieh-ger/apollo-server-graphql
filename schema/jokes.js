let { gql } = require('apollo-server');

const jokeSchema = gql`
    type RandomJoke {
        id: String
        value: String
    }

    type RandomJokeByCategory {
        result: [RandomJoke]
    }

    type Query {
        categories: [String]
        randomJoke: RandomJoke
        randomJokeByCategory(category: String): RandomJoke
        randomCategoryList(query: String): RandomJokeByCategory
    }
`;

module.exports = jokeSchema;