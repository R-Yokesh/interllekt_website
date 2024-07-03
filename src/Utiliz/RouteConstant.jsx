import React from 'react';
const PrivacyPolicyPage = React.lazy(() =>
    import('../Pages/PrivacyAndPolicy/PrivacyPolicyPage')
  );
const HomePage = React.lazy(() =>
    import('../Pages/HomePage/HomePage')
  );
  const CapabilitiesPage = React.lazy(() =>
    import('../Pages/Capabilities/CapabilitiesPage')
  );
  const LegalPage = React.lazy(() =>
    import('../Pages/LegalPage/LegalPage')
  );


  export const routes = [
    { path: '/PrivacyAndPolicy', name: 'Privacy And Policy', element: PrivacyPolicyPage },
    { path: '/', name: 'Home ', element: HomePage },
    { path: '/Capabilities', name: 'Capabilities', element: CapabilitiesPage },
    { path: '/legal', name: 'Legal', element: LegalPage },
  ]  