import React from 'react';
import './App.css';
import data from './data/pages.json'
import PageLink from './components/PageLink'
import Title from './components/Title'
import Description from './components/Description'
import Table from './components/Table'

const components = {
  linkTitle: PageLink,
  pageTitle: Title,
  pageDescription: Description,
  table: Table
}

const App = () => {
  const Section = components[data.type]
  return (
    <div className="App">
      <Section />
    </div>
  );
}

export default App;
