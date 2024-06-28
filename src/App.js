import React, { Fragment, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





// import "./App.sass";
import RoutesComponent from "./CommonRoutes";
import Layout from "./Pages/Layout/Layout";

function App() {
  return (
    <div className="App">
      {/* <RoutesComponent /> */}
      <Router basename='/interllekt.com'>
        <Routes>
          <Route path='/*' element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
