import React from 'react'

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__image" src={process.env.PUBLIC_URL + '/duck.svg'} alt="Duckie!" />
    </div>
  )
}

export default Logo