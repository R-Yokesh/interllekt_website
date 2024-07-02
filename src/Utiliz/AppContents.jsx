import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import  {routes} from "./RouteConstant"

const AppContents = () => {
  return (
    <div>
         <Routes>
        {routes.map((route, idx) => {
          if (route.element) {
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                element={<route.element />}
              />
            );
          }
          return null;
        })}
      </Routes>
    </div>
  )
}

export default AppContents