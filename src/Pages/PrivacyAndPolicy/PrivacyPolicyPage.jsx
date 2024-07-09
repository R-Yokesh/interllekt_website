import React from 'react'
import PrivacyAndPolicy from '../../Component/PrivacyPolicyComponent/PrivacyAndPolicy'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'

const PrivacyPolicyPage = () => {
  return (
    <div>
        <PrivacyAndPolicy/>
        <div id="contact">
        <ContactForm/>
        </div>
    </div>
  )
}

export default PrivacyPolicyPage