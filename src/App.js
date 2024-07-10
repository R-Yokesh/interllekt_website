import React, { Fragment, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 // import "./App.sass";
import RoutesComponent from "./CommonRoutes";
import Layout from "./Pages/Layout/Layout";
import ErrorBoundary from './Utiliz/ErrorBoundary';
 
function App() {
  return (
    <div className="App">
      {/* <RoutesComponent /> */}
      <ErrorBoundary>
      <Router basename='/interllekt.com'>
        <Routes>
          <Route path='/*' element={<Layout />} />
        </Routes>
      </Router>
      </ErrorBoundary>
    </div>
  );
}
 
export default App;