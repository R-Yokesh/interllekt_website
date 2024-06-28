import React from 'react';
const PrivacyAndPolicy = React.lazy(() =>
    import('../Pages/PrivacyAndPolicy/PrivacyAndPolicy')
  );
const HomePage = React.lazy(() =>
    import('../Pages/HomePage/HomePage')
  );

  export const routes = [
    { path: '/PrivacyAndPolicy', name: 'Privacy And Policy', element: PrivacyAndPolicy },
    { path: '/', name: 'HomePage', element: HomePage },
  ]  