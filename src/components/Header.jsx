import React from 'react';
import PropTypes from 'prop-types'

export default function Header() {
  const headerStyles = {
    backgroundColor: 'lightblue', 
    color: 'red',
  }
  
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Feedback UI</h2>  
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'shithole',
}

Header.propTypes = {
  text: PropTypes.string,
}
