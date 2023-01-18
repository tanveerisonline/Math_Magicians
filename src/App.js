// import './App.css';
// import React from 'react';
// import Calculator from './components/Calculator';

// function App() {
//   return (
//     <div className="container"><Calculator /></div>
//   );
// }
// export default App;
import './App.css';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <Link to="/Math-Magicians/">Home</Link>
          </li>
          |
          <li>
            <Link to="/Math-Magicians/calculator">Calculator</Link>
          </li>
          |
          <li>
            <Link to="/Math-Magicians/quote">Quote</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Math-Magicians/" element={<Home />} />
        <Route path="/Math-Magicians/calculator" element={<Calculator />} />
        <Route path="/Math-Magicians/quote" element={<Quote />} />
      </Routes>

    </div>
  );
}

export default App;
