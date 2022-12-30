

import React, { useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
//make landing page to hold neccessary components
import Footer from './Pages/Footer'
import Login from './Pages/Login/login';
import Header from './components/Header';
import Home from './Pages/home';
import Signup from './Pages/SignUp';
import Profile from './Pages/Profile';
import CharacterSheet from './components/CharacterSheet';
// import UpdateCharacter from './components/UpdateCharacter';
import DiceRoller from './Pages/DiceRoller';
import FantasyNameGenerator from './Pages/FantasyNameGenerator';
import { onError } from "@apollo/client/link/error";
// import { ReactSession } from 'react-client-session'


const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Add catch route all later
// https://reactrouter.com/en/main/hooks/use-location
// USE LOCATION ^^
function App() {
  // ReactSession.setStoreType("localStorage")
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diceroller" element={<DiceRoller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile">
            <Route path=":username" element={<Profile />} />
            <Route path="" element={<Profile />} />
          </Route>
          <Route path="/CharacterSheet" element={<CharacterSheet />} />
          <Route path="/FantasyNameGenerator" element={<FantasyNameGenerator />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
