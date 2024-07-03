import React, { Suspense, startTransition } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from "./RouteConstant";

const AppContents = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, idx) => {
            if (route.element) {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <route.element />
                    </React.Suspense>
                  }
                />
              );
            }
            return null;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppContents;
