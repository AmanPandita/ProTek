import React from 'react';
import './App.css';
import {Categories} from './components/Categories';
import {MenuItems} from './components/MenuItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginLeft: '40px' }}>Restaurant Menu</h1>
      </header>
      <div className="container">
        <aside className="sidebar">
          <Categories />
        </aside>
        <section className="content">
          <MenuItems />
        </section>
      </div>
    </div>
  );
}

export default App;
