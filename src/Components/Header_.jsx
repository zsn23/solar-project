// import solarLogo from '../assets/solarLogo.png'
// import facebookLogo from '../assets/fb.png'
// import instagramLogo from '../assets/insta.png'
// import whatsappLogo from '../assets/whatsapp.png'
// // import phoneLogo from '../assets/phone.png'
// import whatsapplogo from '../assets/whatsapp-logo.svg'

// import cartLogo from '../assets/cart.svg'
// // import searchLogo from '../assets/search.png'
// import { Link, NavLink } from 'react-router-dom'
// import { Typewriter } from 'react-simple-typewriter';
// import { useState } from 'react'



// const Header_ = () => {
  
//   const [productDropdown,setproductDropdown]=useState(false);
//   const [servicedropdown,setservicedropdown]=useState(false);

  
  
     
//   return (
//     <>

//       {/* Yellow Strip */}
//       <div className='container-fluid  CustomColor' >
//         <div className='row g-0'>
//           <div className="col-12 col-md-4 p-1 m-0 d-md-flex d-sm-none d-none justify-content-lg-start justify-content-sm-center justify-content-center justify-content-md-start align-items-center">
//             <img src={facebookLogo} alt='Facebook' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
//             <img src={instagramLogo} alt='Instagram' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
//             <img src={whatsappLogo} alt='WhatsApp' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
//           </div>

//           <div className='col-12 col-md-4 p-1 m-0 d-md-flex d-sm-none d-none justify-content-lg-center justify-content-center  align-items-center'>
//             <NavLink to="/contact" className="fw-bold text-dark">
//               <Typewriter
//                 words={['Book Free Appointmant Today!']}
//                 loop={true} // Set loop to false to run only once
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             </NavLink>
//           </div>

//           <div className="col-12 col-md-4 p-1 d-flex justify-content-lg-end justify-content-sm-center justify-content-center justify-content-md-end align-items-center">
//             <Link to="https://web.whatsapp.com/?post_logout=1" className='text-decoration-none d-flex align-items-center '>
//             <img src={whatsapplogo} alt='phone' className='socialLogo' style={{ width: '30px',height:"auto" }} />
//               <h4 className='text-dark m-0 callHeading  text-nowrap'>
//                 +923097223857
//               </h4>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* Yellow Strip */}



//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white">
//         <div className="container-fluid headerContainer ">
//           {/* Hamburger Icon (Stick to Left) */}
//           <div className="d-flex align-items-center ">
//             <button
//               className="navbar-toggler custom-toggler"
//               type="button"
//               data-bs-toggle="offcanvas"
//               // data-bs-target="#offcanvasWithBothOptions"
//               // aria-controls="offcanvasWithBothOptions" 
//               data-bs-target="#offcanvasScrolling"
//               aria-controls="offcanvasScrolling"
//               //  aria-expanded="false"
//               //  aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//           </div>
//           {/* Hamburger Icon (Stick to Left) */}

//           {/* Brand/Logo (Centered on Small Screens) */}
//           <NavLink to="/" className="d-flex justify-content-center">
//             <img src={solarLogo} alt="logo" className="headerLogo" />
//           </NavLink>
//           {/* Brand/Logo (Centered on Small Screens) */}



//           {/* Offcanvas Menu (Left Side) */}
//           <div
//             className="offcanvas offcanvas-start"
//             data-bs-scroll="true" data-bs-backdrop="false"
//             tabIndex="-1"
//             id="offcanvasScrolling"
//             aria-labelledby="offcanvasScrollingLabel"
//           >
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//                 Solar Shine Menu
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close custom-close-btn"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="offcanvas-body justify-content-center">
//               <ul className="navbar-nav nav">
//                 <li className="nav-item">
//                   <NavLink to="/" className="nav-link" activeClassName="active" exact  
//                 >
//                     Home
//                   </NavLink>
//                 </li>
                
//                 <li className="nav-item dropdown"
//                     onMouseEnter={()=>setproductDropdown(true)}
//                     onMouseLeave={()=>setproductDropdown(false)}

//                 >
//                   <Link  className="nav-link d-flex align-items-center" activeClassName="active">
//                     Products <i className="bi bi-caret-up-fill caret"></i>
//                   </Link>
//                   {productDropdown && (
//                     <div className="dropdown-content">
//                       <Link to="/products/solar_panels"    >Solar Panel</Link>
//                       <Link to="/products/ac_dc_fans">AC DC Fans</Link>
//                       <Link to="/products/inverters">Inverter</Link>
//                       <Link to="/products">View All Products</Link>
//                     </div>
//                   )}
//                 </li>
//                 <li className="nav-item dropdown"
//                   onMouseEnter={()=>setservicedropdown(true)}
//                   onMouseLeave={()=>setservicedropdown(false)}
//                 >
//                   <Link className="nav-link" activeClassName="active">
//                     Services  <i className="bi bi-caret-up-fill caret"></i>
//                   </Link>
//                   {servicedropdown && (
//                     <div className="dropdown-content">
//                       <Link to="/services/solar_panels">Solar Fitting</Link>
//                       <Link to="/services/ac_dc_fans">Reparing</Link>
//                       <Link to="/services/inverters">Maintainance</Link>
//                     </div>
//                   )}
//                 </li>


//                 <li className="nav-item">
//                   <NavLink to="/about" className="nav-link" activeClassName="active">
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/contact" className="nav-link" activeClassName="active">
//                     Contact Us
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Offcanvas Menu (Left Side) */}


//             {/* Search, cart */}
//             <div className="d-flex align-items-center ">
//              {/* Search Input (Pill-Shaped) */}
//             <div className="custom-group">
//               <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
//                 <g>
//                   <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//                 </g>
//               </svg>
//               <input placeholder="Search" type="search" className="Searchinput" />
//             </div>
//             {/* Search Input (Pill-Shaped) */}

//             {/* Cart Icon */}
//             <Link to="/cart">
//               <img
//                 src={cartLogo}
//                 alt="cartIcon"
//                 style={{ width: '35px', margin: '0 10px' }}
//                 className='CartSizeInsmallScreens'
//               />
//             </Link>
//              {/* Cart Icon */}
//           </div>
//           {/* Search, cart */}

//         </div>
//       </nav>
//       {/* Navbar */}


//     </>
//   )
// }

// export default Header_



// import { useState } from 'react';
// import { Offcanvas, Nav, Dropdown,  NavLink } from 'react-bootstrap';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Typewriter } from 'react-simple-typewriter';

// // Import your assets
// import solarLogo from '../assets/solarLogo.png';
// import facebookLogo from '../assets/fb.png';
// import instagramLogo from '../assets/insta.png';
// import whatsappLogo from '../assets/whatsapp.png';
// import whatsapplogo from '../assets/whatsapp-logo.svg';
// import cartLogo from '../assets/cart.svg';

// const Header_ = () => {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClose = () => setShowOffcanvas(false);
//   const handleShow = () => setShowOffcanvas(true);

//   const handleNavigation = (path) => {
//     handleClose();
//     navigate(path);
//   };

//   return (
//     <>
  //     {/* Yellow Strip */}
  //     <div className='container-fluid CustomColor'>
  //       <div className='row g-0'>
  //         <div className="col-12 col-md-3 p-1 m-0 d-md-flex d-sm-none d-none justify-content-lg-start justify-content-sm-center justify-content-center justify-content-md-start align-items-center">
  //           <img src={facebookLogo} alt='Facebook' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
  //           <img src={instagramLogo} alt='Instagram' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
  //           <img src={whatsappLogo} alt='WhatsApp' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
  //         </div>

  //         <div className='col-12 col-md-6 p-1 m-0 d-md-flex d-sm-none d-none justify-content-lg-center justify-content-center align-items-center'>
  //           <NavLink to="/contact" onClick={() => handleNavigation('/contact')}>
  //           <span style={{ fontSize: '15px',  fontWeight: 'bold' }}>
  //   <Typewriter
  //     words={['Book Free Appointment Today!']}
  //     loop={true}
  //     cursor
  //     cursorStyle="_"
  //     typeSpeed={70}
  //     deleteSpeed={50}
  //     delaySpeed={1000}
  //   />
  // </span>
  //           </NavLink>
  //         </div>

  //         <div className="col-12 col-md-3 p-1 d-flex justify-content-lg-end justify-content-sm-center justify-content-center justify-content-md-end align-items-center">
  //           <Link to="https://web.whatsapp.com/?post_logout=1" className='text-decoration-none d-flex align-items-center'>
  //             <img src={whatsapplogo} alt='phone' className='socialLogo' style={{ width: '30px', height: "auto" }} />
  //             <h4 className='text-dark m-0 callHeading text-nowrap'>+923097223857</h4>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>

//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white">
//         <div className="container-fluid headerContainer">
//           {/* Hamburger Icon (visible only on mobile) */}
//           <button
//             className="navbar-toggler d-lg-none  custom-toggler"
//             type="button"
//             onClick={handleShow}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Brand/Logo */}
//           <Link to="/" className="d-flex justify-content-center" onClick={() => handleNavigation('/')}>
//             <img src={solarLogo} alt="logo" className="headerLogo" />
//           </Link>

//           {/* Desktop Menu (visible on lg screens and up) */}
//           <div className="d-none d-lg-block">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/" onClick={() => handleNavigation('/')} className={location.pathname === "/" ? "active" : ""}>Home</Nav.Link>
              
//               {/* Products Dropdown */}
//               <Dropdown>
//                 <Dropdown.Toggle as={Nav.Link} className="text-dark">Products</Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item as={Link} to="/products/solar_panels">Solar Panel</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/products/ac_dc_fans">AC DC Fans</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/products/inverters">Inverter</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/products">View All Products</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>

//               {/* Services Dropdown */}
//               <Dropdown>
//                 <Dropdown.Toggle as={Nav.Link} className="text-dark">Services</Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item as={Link} to="/services/solar_panels">Solar Fitting</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/services/ac_dc_fans">Reparing</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/services/inverters">Maintainance</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>

//               <Nav.Link as={Link} to="/about" onClick={() => handleNavigation('/about')} className={location.pathname === "/about" ? "active" : ""}>About Us</Nav.Link>
//                 <Nav.Link as={Link} to="/contact" onClick={() => handleNavigation('/contact')} className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Nav.Link>
//             </Nav>
//           </div>

//           {/* Search and Cart */}
//           <div className="d-flex align-items-center">
//             <div className="custom-group">
//               <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
//                 <g>
//                   <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//                 </g>
//               </svg>
//               <input placeholder="Search" type="search" className="Searchinput" />
//             </div>
//             <Link to="/cart">
//               <img
//                 src={cartLogo}
//                 alt="cartIcon"
//                 style={{ width: '35px', margin: '0 10px' }}
//                 className='CartSizeInsmallScreens'
//               />
//             </Link>
//           </div>

//           {/* Mobile Offcanvas */}
//           <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start" className="d-lg-none">
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>Solar Shine Menu</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body >
//               <Nav className="flex-column ">
//               <Nav.Link as={Link} to="/" style={{width:"fit-content"}} onClick={() => handleNavigation('/')} className={location.pathname === "/" ? "active" : ""}>Home</Nav.Link>

                
//                 {/* Products Dropdown */}
//                 <Dropdown className="nav-item" onMouseEnter={(e) => e.currentTarget.querySelector('.dropdown-menu').classList.add('show')} onMouseLeave={(e) => e.currentTarget.querySelector('.dropdown-menu').classList.remove('show')}>
//                   <Dropdown.Toggle style={{width:"fit-content", borderBottom:"none"}} as={Nav.Link}>Products</Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item as={Link} to="/products/solar_panels" onClick={handleClose}>Solar Panel</Dropdown.Item>
//                     <Dropdown.Item as={Link} to="/products/ac_dc_fans" onClick={handleClose}>AC DC Fans</Dropdown.Item>
//                     <Dropdown.Item as={Link} to="/products/inverters" onClick={handleClose}>Inverter</Dropdown.Item>
//                     <Dropdown.Item as={Link} to="/products" onClick={handleClose}>View All Products</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>

//                 {/* Services Dropdown */}
//                 <Dropdown>
//                   <Dropdown.Toggle style={{width:"fit-content"}} as={Nav.Link}>Services</Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item as={Link} to="/services/solar_panels" onClick={handleClose}>Solar Fitting</Dropdown.Item>
//                     <Dropdown.Item as={Link} to="/services/ac_dc_fans" onClick={handleClose}>Reparing</Dropdown.Item>
//                     <Dropdown.Item as={Link} to="/services/inverters" onClick={handleClose}>Maintainance</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>

//                 <Nav.Link style={{width:"fit-content"}} as={Link} to="/about" onClick={() => handleNavigation('/about')} className={location.pathname === "/about" ? "active" : ""}>About Us</Nav.Link>
//                 <Nav.Link style={{width:"fit-content"}} as={Link} to="/contact" onClick={handleClose}>Contact Us</Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header_;


import { useState } from 'react';
import { Offcanvas, Nav, Dropdown } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

// Import your assets
import solarLogo from '../assets/solarLogo.png';
import facebookLogo from '../assets/fb.png';
import instagramLogo from '../assets/insta.png';
import whatsappLogo from '../assets/whatsapp.png';
import whatsapplogo from '../assets/whatsapp-logo.svg';
import cartLogo from '../assets/cart.svg';

const Header_ = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleNavigation = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <>
      {/* Yellow Strip */}
      <div className='container-fluid CustomColor'>
        <div className='row g-0'>
          <div className="col-12 col-md-3 p-1 m-0 d-md-flex d-sm-none d-none justify-content-lg-start justify-content-sm-center justify-content-center justify-content-md-start align-items-center">
            <img src={facebookLogo} alt='Facebook' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
            <img src={instagramLogo} alt='Instagram' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
            <img src={whatsappLogo} alt='WhatsApp' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
          </div>

          <div className='col-12 col-md-6 p-1 m-0 d-md-flex d-sm-none d-none justify-content-lg-center justify-content-center align-items-center'>
            <NavLink to="/contact" onClick={() => handleNavigation('/contact')} className="text-decoration-none">
              <span style={{ fontSize: '15px', fontWeight: 'bold' ,color:"black" }}>
                <Typewriter
                  words={['Book Free Appointment Today!']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </NavLink>
          </div>

          <div className="col-12 col-md-3 p-1 d-flex justify-content-lg-end justify-content-sm-center justify-content-center justify-content-md-end align-items-center">
            <Link to="https://web.whatsapp.com/?post_logout=1" className='text-decoration-none d-flex align-items-center'>
              <img src={whatsapplogo} alt='phone' className='socialLogo' style={{ width: '30px', height: "auto" }} />
              <h4 className='text-dark m-0 callHeading text-nowrap'>+923097223857</h4>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid headerContainer">
          {/* Hamburger Icon (visible only on mobile) */}
          <button
            className=" d-lg-none custom-toggler "
            type="button"
            onClick={handleShow}
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* <FontAwesomeIcon icon={faBars} size='10px' color="black" /> */}
            <i className="fa fa-thin fa-bars" style={{color:"black", fontSize:"25px"}}></i>
          </button>

          {/* Brand/Logo */}
          <Link to="/" className="d-flex justify-content-center" onClick={() => handleNavigation('/')}>
            <img src={solarLogo} alt="logo" className="headerLogo" />
          </Link>

          {/* Desktop Menu (visible on lg screens and up) */}
          <div className="d-none d-lg-block">
            <Nav className="me-auto align-items-center">
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => handleNavigation('/')} 
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Nav.Link>
              
              {/* Products Dropdown with Hover */}
              <div 
                className="nav-item dropdown"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <Link className="nav-link dropdown-toggle">
                  Products <i className="bi bi-caret-up-fill caret"></i>
                </Link>
                <div className={`dropdown-menu ${showProductsDropdown ? 'show' : ''}`}>
                  <Link className="dropdown-item" to="/products/solar_panels">Solar Panel</Link>
                  <Link className="dropdown-item" to="/products/ac_dc_fans">AC DC Fans</Link>
                  <Link className="dropdown-item" to="/products/inverters">Inverter</Link>
                  <Link className="dropdown-item" to="/products">View All Products</Link>
                </div>
              </div>

              {/* Services Dropdown with Hover */}
              <div 
                className="nav-item dropdown"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Link className="nav-link dropdown-toggle">
                  Services <i className="bi bi-caret-up-fill caret"></i>
                </Link>
                <div className={`dropdown-menu ${showServicesDropdown ? 'show' : ''}`}>
                  <Link className="dropdown-item" to="/services/solar_panels">Solar Fitting</Link>
                  <Link className="dropdown-item" to="/services/ac_dc_fans">Reparing</Link>
                  <Link className="dropdown-item" to="/services/inverters">Maintainance</Link>
                </div>
              </div>

              <Nav.Link 
                as={Link} 
                to="/about" 
                onClick={() => handleNavigation('/about')} 
                className={location.pathname === "/about" ? "active" : ""}
              >
                About Us
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                onClick={() => handleNavigation('/contact')} 
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </div>

          {/* Search and Cart */}
          <div className="d-flex align-items-center">
            <div className="custom-group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input placeholder="Search" type="search" className="Searchinput" />
            </div>
            <Link to="/cart">
              <img
                src={cartLogo}
                alt="cartIcon"
                style={{ width: '35px', margin: '0 10px' }}
                className='CartSizeInsmallScreens'
              />
            </Link>
          </div>

          {/* Mobile Offcanvas */}
          <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start" className="d-lg-none">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Solar Shine Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link 
                  as={Link} 
                  to="/" 
                  style={{width:"fit-content"}} 
                  onClick={handleClose} 
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Nav.Link>
                
                {/* Products Dropdown (Click on mobile) */}
                <Dropdown>
                  <Dropdown.Toggle as={Nav.Link} style={{width:"fit-content", borderBottom:"none"}}>
                    Products <i className="bi bi-caret-up-fill caret"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/products/solar_panels" onClick={handleClose}>Solar Panel</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/products/ac_dc_fans" onClick={handleClose}>AC DC Fans</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/products/inverters" onClick={handleClose}>Inverter</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/products" onClick={handleClose}>View All Products</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Services Dropdown (Click on mobile) */}
                <Dropdown>
                  <Dropdown.Toggle as={Nav.Link} style={{width:"fit-content"}}>
                    Services <i className="bi bi-caret-up-fill caret"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/services/solar_panels" onClick={handleClose}>Solar Fitting</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/services/ac_dc_fans" onClick={handleClose}>Reparing</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/services/inverters" onClick={handleClose}>Maintainance</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Link 
                  as={Link} 
                  to="/about" 
                  style={{width:"fit-content"}} 
                  onClick={handleClose}
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About Us
                </Nav.Link>
                <Nav.Link 
                  as={Link} 
                  to="/contact" 
                  style={{width:"fit-content"}} 
                  onClick={handleClose}
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>

      {/* Custom CSS for hover dropdowns */}
      <style>{`
        .dropdown:hover .dropdown-menu {
          display: block;
          margin-top: 1px;
        }
        .dropdown-menu {
          border: 1px light grey;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }
        .dropdown-item {
          padding: 0.5rem 1.5rem;
        }
        .dropdown-item:hover {
          background: linear-gradient(190deg, #FFDE32,   #FF8C00);
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Header_;