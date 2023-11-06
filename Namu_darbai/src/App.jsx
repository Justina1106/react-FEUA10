import React from 'react';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero title="Info hero" subtitle="Info subtitle" color="blue" />
      <Hero title="Info hero" subtitle="Info subtitle" color="red" />
    </div>
  );
};

export default App;
  
