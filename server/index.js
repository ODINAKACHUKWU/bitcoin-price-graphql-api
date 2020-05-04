import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import path from "path";
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(logger("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});
server.applyMiddleware({ app, path: "/graphiql" });

app.listen(port, () =>
  console.info(
    `Server started on port ${port}; graphiql_path: ${server.graphqlPath}`
  )
);
