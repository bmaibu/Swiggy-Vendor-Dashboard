import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [showLogOut, setShowLogOut] = useState(false)
  const [showFirmTitle, setShowFirmTitle] = useState(true)
  const [showInitialWelcome, setShowInitialWelcome] = useState(true)

  useEffect(() => {
    const loginToken = localStorage.getItem('loginToken')
    if (loginToken) {
      setShowLogOut(true)
      setShowWelcome(true)
      setShowInitialWelcome(false)
    }
  }, [])

  useEffect(() => {
    const firmName = localStorage.getItem('firmName')
    const firmId = localStorage.getItem('firmId')
    if (firmName || firmId) {
      setShowFirmTitle(false)
      setShowWelcome(true)
      setShowInitialWelcome(false)
    }
  }, [])

  const logOutHandler = () => {
    confirm('Are you sure to logout?')
    localStorage.removeItem('loginToken')
    localStorage.removeItem('firmId')
    localStorage.removeItem('firmName')
    setShowLogOut(false)
    setShowFirmTitle(true)
    setShowWelcome(false)
    setShowInitialWelcome(true)
  }

  const showLoginHandler = () => {
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setShowInitialWelcome(false)
  }

  const showRegisterHandler = () => {
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setShowInitialWelcome(false)
  }

  const showFirmHandler = () => {
    if (showLogOut) {
      setShowRegister(false)
      setShowLogin(false)
      setShowFirm(true)
      setShowProduct(false)
      setShowWelcome(false)
      setShowAllProducts(false)
      setShowInitialWelcome(false)
    } else {
      alert('please login')
      setShowLogin(true)
      setShowInitialWelcome(false)
    }
  }

  const showProductHandler = () => {
    if (showLogOut) {
      setShowRegister(false)
      setShowLogin(false)
      setShowFirm(false)
      setShowProduct(true)
      setShowWelcome(false)
      setShowAllProducts(false)
      setShowInitialWelcome(false)
    } else {
      alert('please login')
      setShowLogin(true)
      setShowInitialWelcome(false)
    }
  }

  const showWelcomeHandler = () => {
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(true)
    setShowAllProducts(false)
    setShowInitialWelcome(false)
  }

  const showAllProductsHandler = () => {
    if (showLogOut) {
      setShowRegister(false)
      setShowLogin(false)
      setShowFirm(false)
      setShowProduct(false)
      setShowWelcome(false)
      setShowAllProducts(true)
      setShowInitialWelcome(false)
    } else {
      alert('please login')
      setShowLogin(true)
      setShowInitialWelcome(false)
    }
  }

  return (
    <>
      <section className='landingSection'>
        <NavBar
          showLoginHandler={showLoginHandler}
          showRegisterHandler={showRegisterHandler}
          showLogOut={showLogOut}
          logOutHandler={logOutHandler}
        />
        <div className='collectionSection'>
          <SideBar
            showFirmHandler={showFirmHandler}
            showProductHandler={showProductHandler}
            showAllProductsHandler={showAllProductsHandler}
            showFirmTitle={showFirmTitle}
          />

          {/* Show initial welcome page when user is not logged in */}
          {showInitialWelcome && !showLogOut && (
            <div className='initialWelcomeSection'>
              <div className='welcomeContent'>
                <h2>Welcome to Swiggy Vendor Dashboard</h2>
                <div className='welcomeImage'>
                  <img src='/assets/chef.jpg' alt='Swiggy Vendor' />
                </div>
                <div className='welcomeMessage'>
                  <p>
                    🚀 <strong>Grow your business with Swiggy!</strong>
                  </p>
                  <p>
                    Join thousands of successful restaurants and food businesses on India's leading food delivery platform.
                  </p>

                  <div className='step'>
                    <span className='stepNumber'>1</span>
                    <div className='stepContent'>
                      <strong>Register</strong> - Create your vendor account
                    </div>
                  </div>
                  <div className='step'>
                    <span className='stepNumber'>2</span>
                    <div className='stepContent'>
                      <strong>Login</strong> - Access your dashboard with registered details
                    </div>
                  </div>
                  <div className='step'>
                    <span className='stepNumber'>3</span>
                    <div className='stepContent'>
                      <strong>Manage</strong> - Add your restaurant and start taking orders!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Existing components */}
          {showFirm && showLogOut && <AddFirm />}
          {showProduct && showLogOut && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogOut && <AllProducts />}
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
          {showRegister && <Register showLoginHandler={showLoginHandler} />}
        </div>
      </section>
    </>
  )
}

export default LandingPage
