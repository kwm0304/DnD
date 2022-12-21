const express = require("express");
const { ApolloServer } = require('apollo-server-express')

const { typeDefs, resolvers } = require ('./schemas')
const db = require('./config/connection')

const router = require("./routes")
const passport = require("passport");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

// Passport Config 
require('./config/passport')(passport);

// Session middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "test",
  resave: false,
  saveUninitialized: false
}));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/App.js'))
})

// Define API routes here
require("./routes/dndRoutes")(app);
app.use(router)


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});