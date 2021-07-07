import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageContextProvider } from './store';
import Page from './components/Page'
function App() {
  return (
    <PageContextProvider>
      <Page />
    </PageContextProvider>
    
  );
}

export default App;
