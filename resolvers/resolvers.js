let got = require('got');

const URL = 'https://api.chucknorris.io/jokes';

const resolvers = {
    Query: {
        async categories() {
            return await got.get(`${URL}/categories`).then(res => JSON.parse(res.body));
        },
        async randomJoke() {
            return await got.get(`${URL}/random`).then(res => JSON.parse(res.body));
        },
        async randomJokeByCategory(_, args) {
            return await got.get(`${URL}/random?category=${args.category.toLowerCase()}`).then(res => JSON.parse(res.body));
        },
        async randomCategoryList(_, args) {
            return await got.get(`${URL}/search?query=${args.query.toLowerCase()}`).then(res => JSON.parse(res.body));
        }
    }
}

module.exports = resolvers;