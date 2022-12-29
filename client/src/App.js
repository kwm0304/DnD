import React, { useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//make landing page to hold neccessary components
import Footer from './Pages/Footer'
import Login from './Pages/Login/login';
import Header from './components/Header';
import Home from './Pages/home';
import Signup from './Pages/SignUp';
import Profile from './Pages/Profile';
import CharacterSheet from './components/CharacterSheet';
import UpdateCharacter from './components/UpdateCharacter';
import DiceRoller from './Pages/DiceRoller';
import FantasyNameGenerator from './Pages/FantasyNameGenerator'
import { onError } from "@apollo/client/link/error";
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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function App() {
  const [currentTab, setCurrentTab] = useState("Login");

  
  const renderTab = () => {
		switch (currentTab) {
			case "DiceRoller":
				return <DiceRoller />;
			case "CharacterSheet":
				return <CharacterSheet />;
			case "FantasyNameGenerator":
				return <FantasyNameGenerator />;
			case "Profile":
				return <Profile />;
		}
	};
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
      <div style={{ maxWidth: "fit-content", margin: "0 auto", minWidth: "170px" }}>  
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            <main>{renderTab()}</main>
            <Routes>
              <Route path="/" element={<Home />}
              />
              <Route path="/Login" element={<Login />}
              />
              <Route path="/Signup" element={<Signup />} 
              />
              <Route path="/Profile" element={<Profile />}
              />
              {/* <Route path="/DiceRoller" element={<DiceRoller />} */}
              {/* /> */}
              <Route path="/CharacterSheet" element={<CharacterSheet />}
              />
              <Route path="/UpdateCharacter" element={<UpdateCharacter />}
              />
              </Routes>
        </div>
        <Footer />
          </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;