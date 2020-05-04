# bitcoin-price-graphql-api

This application is a custom GraphQL API service built to mount a GraphiQL interface [Apollo graphql playground](https://www.apollographql.com/) on hitting the `/graphiql` endpoint in my [Bitcoin Exchange Calculator](https://github.com/ODINAKACHUKWU/bitcoin-exchange-calculator) application. This feature is enabled for Bitcoin Exchange Calculator application only on production.

Read the Bitcoin Exchange Calculator [README](https://github.com/ODINAKACHUKWU/bitcoin-exchange-calculator) and [Documentation](https://bitcoin-exchange-calculator.herokuapp.com/developer) for more details.

# How to test

## Prerequisite

Provide the required variables in the .env file for the following keys:

- GRAPHQL_API_DEV_URL=http://localhost:3000
- GRAPHQL_API_PROD_URL=https://bitcoin-exchange-calculator.herokuapp.com

#### An important note:

Checkout the `resolvers.js` file in the graphql folder whether the variables above are used. Assign the `base_url` a value using `process.env.GRAPHQL_API_PROD_URL`. This way, the `base_url` that is defined using the `let` keyword and the `if` block are not necessary.

However, if you are familiar with the Ruby on Rails framework, you can setup the GraphQI API by following the instructions on the Bitcoin Exchange Calculator [README](https://github.com/ODINAKACHUKWU/bitcoin-exchange-calculator).

And then, start the rails server and add the variable to the `.env` file:

- NODE_ENV=development

## Testing

- Clone this repo - git clone https://github.com/ODINAKACHUKWU/bitcoin-price-graphql-api.git

- Switch into the newly-cloned directory `cd bitcoin-price-graphql-api`

- Install all the necessary dependencies using the command `npm install`

- Start the server using the command `npm run start:dev`

- Open the app on your browser using `localhost:8000`
