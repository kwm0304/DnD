import { React, useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/Login/login';
import Header from './components/Header/index';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import CreateChar from './pages/CreateChar';
import UpdateCharacter from './components/UpdateCharacter';
import diceRoller from './Pages/DiceRoller'
import DiceRoller from './Pages/DiceRoller';
// import { QUERY_CHAR } from './utils/queries';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  uri: "/graphql"
});

function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearch('');
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setSearch(inputValue);
    setResult(inputValue);
  };
  console.log(result);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
            <div style={{ maxWidth: "fit-content", margin: "0 auto", minWidth: "170px" }}>
              <Route exact path="/">
                <Home
                  value={result}
                />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/diceRoller">
                <DiceRoller />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/createCharacter">
                <CharacterSheet />
              </Route>
              <Route exact path="/updateCharacter" component={UpdateCharacter} />
            </div>
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;