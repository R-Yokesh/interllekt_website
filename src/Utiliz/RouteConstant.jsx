import React from 'react';
const PrivacyPolicyPage = React.lazy(() =>
    import('../Pages/PrivacyAndPolicy/PrivacyPolicyPage')
  );
const HomePage = React.lazy(() =>
    import('../Pages/HomePage/HomePage')
  );

  const AboutPage = React.lazy(() =>
    import('../Pages/AboutusPage/AboutPage')
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

  const NewContactPage = React.lazy(() =>
    import('../Pages/NewContactPage/NewContactPage')
  );






  export const routes = [
    { path: '/privacyandpolicy', name: 'Privacy And Policy', element: PrivacyPolicyPage },
    { path: '/', name: 'Home ', element: HomePage },
    { path: '/about', name: 'About ', element: AboutPage },
    { path: '/capabilities', name: 'Capabilities', element: CapabilitiesPage },
    { path: '/legal', name: 'Legal', element: LegalPage },
    { path: '/ethos', name: 'Ethos', element: EthosPage },
    { path: '/careers', name: 'Careers', element: CareersPage },
    {path:'/innovation', name:'Innovation', element:InnovationPage},
    {path:'/business', name:'Business', element:BusinessPage},
    {path:'/contact', name:'contact', element:NewContactPage},
  ]  