import React from 'react'

const NavBar = ({showLoginHandler, showRegisterHandler, showLogOut, logOutHandler}) => {
  
  const firmName = localStorage.getItem('firmName')

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure to logout?");
    if (!confirmed) return; // stop logout if user presses Cancel
    logOutHandler(); // only call logout when confirmed
  }

  return (
    <div className="navSection">
      
        <div className="company">
            Vendor Dashboard
        </div>
        <div className="firmName">
            <h4>Restaurant/Hotel : {firmName}</h4>
        </div>
        <div className="userAuth">
          {!showLogOut ?  (
            <>
              <span onClick={showLoginHandler}>Login / </span>
              <span onClick={showRegisterHandler}>Register</span>
            </>
          ) : (
            <span 
              onClick={handleLogout} 
              className='logout'
            >
              Logout
            </span>
          )}
        </div>
    </div>
  )
}

export default NavBar


