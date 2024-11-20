import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/Pages/SearchResults/SearchResults';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchResults />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
