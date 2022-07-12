import './sass/App.scss';
import './css/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import RibbonConstructor from './views/RibbonConstructor';
import MarkupsList from './views/MarkupsList';
import Markup from './views/Markup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<RibbonConstructor />} />
            <Route path='/markups' element={<MarkupsList />} />
            <Route path='/markups/:id' element={<Markup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
