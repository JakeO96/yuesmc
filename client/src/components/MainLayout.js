import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import LegalFooter from './LegalFooter'

export default function Layout({ children }) {
  return (
    <div className="max-w-[1920px] mx-auto bg-noct-black min-h-screen">
      <Header />
      {children}
      <LegalFooter />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node
}