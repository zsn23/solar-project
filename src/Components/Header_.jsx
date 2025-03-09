import solarLogo from '../assets/solarLogo.png'
import facebookLogo from '../assets/fb.png'
import instagramLogo from '../assets/insta.png'
import whatsappLogo from '../assets/whatsapp.png'
// import phoneLogo from '../assets/phone.png'
import whatsapplogo from '../assets/whatsapp-logo.svg'

import cartLogo from '../assets/cart.svg'
// import searchLogo from '../assets/search.png'
import { Link, NavLink } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react'

const Header_ = () => {
  const [productDropdown,setproductDropdown]=useState(false);
  // const [servicedropdown,setservicedropdown]=useState(false);
  return (
    <>

      {/* Yellow Strip */}
      <div className='container-fluid p-2 CustomColor' >
        <div className='row g-0'>
          <div className="col-12 col-md-4 p-1 m-0 d-flex justify-content-lg-start justify-content-sm-center justify-content-center justify-content-md-start align-items-center">
            <img src={facebookLogo} alt='Facebook' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
            <img src={instagramLogo} alt='Instagram' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
            <img src={whatsappLogo} alt='WhatsApp' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
          </div>

          <div className='col-12 col-md-4 p-1 m-0 d-md-flex d-sm-none d-none justify-content-lg-center justify-content-center  align-items-center'>
            <NavLink to="/contact" className="fw-bold text-dark">
              <Typewriter
                words={['Book Free Appointmant Today!']}
                loop={true} // Set loop to false to run only once
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </NavLink>
          </div>

          <div className="col-12 col-md-4 p-1 d-flex justify-content-lg-end justify-content-sm-center justify-content-center justify-content-md-end align-items-center">
            <Link to="https://web.whatsapp.com/?post_logout=1" className='text-decoration-none d-flex align-items-center '>
            <img src={whatsapplogo} alt='phone' className='socialLogo' style={{ width: '35px', margin: '0 5px' }} />
              <h4 className='text-dark m-0 callHeading  text-nowrap'>
                +923097223857
              </h4>
            </Link>
          </div>
        </div>
      </div>
      {/* Yellow Strip */}



      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container headerContainer ">
          {/* Hamburger Icon (Stick to Left) */}
          <div className="d-flex align-items-center ">
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {/* Hamburger Icon (Stick to Left) */}

          {/* Brand/Logo (Centered on Small Screens) */}
          <NavLink to="/" className="d-flex justify-content-center">
            <img src={solarLogo} alt="logo" className="headerLogo" />
          </NavLink>
          {/* Brand/Logo (Centered on Small Screens) */}



          {/* Offcanvas Menu (Left Side) */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Solar Shine Menu
              </h5>
              <button
                type="button"
                className="btn-close custom-close-btn"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-center">
              <ul className="navbar-nav nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" activeClassName="active" exact>
                    Home
                  </NavLink>
                </li>
                
                <li className="nav-item dropdown"
                    onMouseEnter={()=>setproductDropdown(true)}
                    onMouseLeave={()=>setproductDropdown(false)}

                >
                  <Link  className="nav-link d-flex align-items-center" activeClassName="active">
                    Products <i className="bi bi-caret-up-fill caret"></i>
                  </Link>
                  {productDropdown && (
                    <div className="dropdown-content">
                      <Link to="/products/solar_panels">Solar Panel</Link>
                      <Link to="/products/ac_dc_fans">AC DC Fans</Link>
                      <Link to="/products/inverters">Inverter</Link>
                      <Link to="/products">View All Products</Link>
                    </div>
                  )}
                </li>
                {/* <li className="nav-item dropdown"
                  onMouseEnter={()=>setservicedropdown(true)}
                  onMouseLeave={()=>setservicedropdown(false)}
                >
                  <Link className="nav-link" activeClassName="active">
                    Services  <i className="bi bi-caret-up-fill caret"></i>
                  </Link>
                  {servicedropdown && (
                    <div className="dropdown-content">
                      <Link to="/services/solar_panels">Solar Fitting</Link>
                      <Link to="/services/ac_dc_fans">Reparing</Link>
                      <Link to="/services/inverters">Maintainance</Link>
                    </div>
                  )}
                </li> */}


                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" activeClassName="active">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" activeClassName="active">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* Offcanvas Menu (Left Side) */}


            {/* Search, cart */}
            <div className="d-flex align-items-center ">
             {/* Search Input (Pill-Shaped) */}
            <div className="custom-group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input placeholder="Search" type="search" className="Searchinput" />
            </div>
            {/* Search Input (Pill-Shaped) */}

            {/* Cart Icon */}
            <Link to="/cart">
              <img
                src={cartLogo}
                alt="cartIcon"
                style={{ width: '35px', margin: '0 10px' }}
                className='CartSizeInsmallScreens'
              />
            </Link>
             {/* Cart Icon */}
          </div>
          {/* Search, cart */}

        </div>
      </nav>
      {/* Navbar */}


    </>
  )
}

export default Header_