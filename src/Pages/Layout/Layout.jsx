import React from 'react'
// import Header from '../../Component/CommonComponent/Header/Header'
import AppContents from '../../Utiliz/AppContents'
import Footer from '../../Component/CommonComponent/Footer/Footer'
import NewHeader from '../../Component/CommonComponent/NewHeader/NewHeader'

const Layout = ({children}) => {
  return (
    <div>
      {/* <Header/> */}
      <NewHeader/>
      <AppContents/>
      <Footer/>
        {/* <main className="main-content">{children}</main> */}
    </div>
  )
}

export default Layout