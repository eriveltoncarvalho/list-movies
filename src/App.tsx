import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RoutesApp from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <RoutesApp />
    </Router>
  </>
);

export default App;