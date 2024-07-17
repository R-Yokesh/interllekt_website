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
  const EthosPage = React.lazy(() =>
    import('../Pages/EthosPage/EthosPage')
  );
  const CareersPage = React.lazy(() =>
    import('../Pages/CareersPage/CareersPage')
  );

  const InnovationPage = React.lazy(() =>
    import('../Pages/Innovation/InnovationPage')
  );
  const BusinessPage = React.lazy(() =>
    import('../Pages/Business/BusinessPage')
  );




  export const routes = [
    { path: '/PrivacyAndPolicy', name: 'Privacy And Policy', element: PrivacyPolicyPage },
    { path: '/', name: 'Home ', element: HomePage },
    { path: '/Capabilities', name: 'Capabilities', element: CapabilitiesPage },
    { path: '/legal', name: 'Legal', element: LegalPage },
    { path: '/Ethos', name: 'Ethos', element: EthosPage },
    { path: '/Careers', name: 'Careers', element: CareersPage },
    {path:'/Innovation', name:'Innovation', element:InnovationPage},
    {path:'/Business', name:'Business', element:BusinessPage},
  ]  