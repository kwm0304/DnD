import React, { useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
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
  uri: 'http://localhost:3001/graphql',
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

  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
      <div style={{ maxWidth: "fit-content", margin: "0 auto", minWidth: "170px" }}>  
            <Header
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
            <Routes>
              <Route path="/" element={<Home />}
              />
              <Route path="/Login" element={<Login />}
              />
              <Route path="/Signup" element={<Signup />} 
              />
              <Route path="/Profile" element={<Profile />}
              />
              <Route path="/DiceRoller" element={<DiceRoller />}
              />
              <Route path="/CharacterSheet" element={<CharacterSheet />}
              />
              <Route path="/UpdateCharacter" element={<UpdateCharacter />}
              />
              </Routes>
        </div>
          </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;