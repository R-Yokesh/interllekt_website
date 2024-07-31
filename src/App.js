import React, { Fragment, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 // import "./App.sass";
import RoutesComponent from "./CommonRoutes";
import Layout from "./Pages/Layout/Layout";
import ErrorBoundary from './Utiliz/ErrorBoundary';
import { Helmet } from 'react-helmet';
import "./Utiliz/Responsive.css"

 
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Interllekt - A Global Business Development Company</title>
        <meta name="description" content="Interllekt - A Global Business Development Company" />
      </Helmet>

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