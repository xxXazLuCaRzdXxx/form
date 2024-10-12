import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import Home from './components/Home';
import Registration from './components/Registration';
import './App.css';
import BgmiLogo from './bgmi_logo_trans.png';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <a href="\">
          <img src={BgmiLogo} alt="Text BGMI" height="100px" className="reveal" />
        </a>
          
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </nav>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;