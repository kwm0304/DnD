import React, { useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//make landing page to hold neccessary components
import Login from './Pages/Login/login';
import Header from './components/Header';
import Home from './Pages/home';
import Signup from './Pages/SignUp';
import Profile from './Pages/Profile';
import CharacterSheet from './Pages/CharacterSheet';
import UpdateCharacter from './components/UpdateCharacter';
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
      <div className="flex-column justify-flex-start min-100-vh">
      <div style={{ maxWidth: "fit-content", margin: "0 auto", minWidth: "170px" }}>
        <Switch>
          
            <Header
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
            
              <Route exact path="/">
                <Home
                  value={result}
                />
              </Route>

              <Route exact path="/Login"><Login/></Route>
              <Route exact path="/Signup" component={Signup}>
                <Signup />
              </Route>
              <Route exact path="/Profile">
                <Profile />
              </Route>
              <Route exact path="/DiceRoller">
                <DiceRoller />
              </Route>
              <Route exact path="/CharacterSheet">
                < CharacterSheet/>
              </Route>
              <Route exact path="/UpdateCharacter" component={UpdateCharacter} />
            
        </Switch>
        </div>
          </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;