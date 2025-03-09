import { Link } from "react-router-dom";
import solarLogo from '../assets/solarLogo.png'
import facebookLogo from '../assets/fb.png'
import instagramLogo from '../assets/insta.png'
import whatsappLogo from '../assets/whatsapp.png'

const Footer = () => {
    return (
        <footer className="footer border-top">
            <div className="container text-lg-start text-sm-center py-3 " style={{ paddingTop: "5px" }}>
                {/* Main Content Row - Fixed columns */}
                <div className="row  justify-content-center border-bottom">  {/* Changed from g-0 to g-4 for gutter spacing */}
                    {/* Company Info Column */}
                    <div className="col-12 col-md-6 col-lg-6 mb-4 mt-4">  {/* Fixed column sizing */}
                        <h5 className="text-dark text-center">Solarshineelctro.shop</h5>
                        <p className="text-secondary  text-wrap">
                            Solarshineelctro Pakistan’s first solar renewable energy store which offers a key feature to calculate your energy requirements. We are here to facilitate you through a range of solar panels, Quality, durability, and customer satisfaction are our top-notch priorities. We believe that solar energy is suitable for climate needs, but it is also a complete solution for you if you struggle for savings.
                        </p>
                        <div className="row align-items-center  flex-wrap">
                            <div className="col-12">
                                <div className="row mb-1">
                                    <div className="col-12 text-start">
                                        <h5 className="fw-bolder ">
                                            Join Newsletter
                                        </h5>
                                    </div>
                                </div>
                                <div className="row align-items-center ">
                                    <div className="col-12 d-flex gap-2">
                                        {/* Search Input (Pill-Shaped) */}
                                        <div className="w-100">
                                            <input placeholder="Email address" type="search" className="Searchinput" />
                                        </div>
                                        {/* Search Input (Pill-Shaped) */}
                                        <button className="btn btn-trasparent btn-outline-dark fw-bold  d-flex align-items-center rounded-pill">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="col-6 col-md-6 col-lg-2 mb-4 mt-4">

                        <h5 className="text-dark mb-3">SERVICES</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Domestic Solar Solutions</Link></li>
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Commercial Solar Solutions</Link></li>
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Industrial Solar Solution</Link></li>
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Net Metering</Link></li>
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Solar Design</Link></li>
                            <li><Link to="#!" className="text-secondary text-decoration-none">Solar Consultancy</Link></li>
                        </ul>

                    </div>

                    {/* Products Column */}
                    <div className="col-6 col-md-6 col-lg-2 mb-4 mt-4">
                        <h5 className="text-dark mb-3">PRODUCT</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Solar Panel</Link></li>
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Solar Inverter</Link></li>
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Solar Batteries</Link></li>
                            <li className="mb-2"><Link to="#!" className="text-secondary text-decoration-none">Solar Water Pump Drive</Link></li>
                            <li><Link to="#!" className="text-secondary text-decoration-none">Mounting Structure</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-12 col-md-6 col-lg-2 mb-4 mt-4 d-flex flex-column">
                        <div>
                            <h5 className="text-dark mb-3">CONTACT US</h5>
                            <ul className="list-unstyled">

                                <li className="mb-2">
                                    <Link to="tel:+923211818381" className="text-secondary text-decoration-none">
                                        <i className="bi bi-telephone-fill"></i>    +92 309-7223857
                                    </Link>
                                </li>

                                <li className="mb-2">
                                    <Link to="http://www.buysolar.pk" className="text-secondary text-decoration-none" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-globe"></i> Solarshineelctro.shop
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <span className="text-secondary"><i className="bi bi-geo-alt-fill"></i> Johar Town Lahore Pakistan</span>
                                </li>



                                <li className="d-flex justify-content-lg-start justify-content-sm-center">
                                    <Link to='#'>
                                        <img src={facebookLogo} alt='Facebook' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
                                    </Link>

                                    <Link to='#'>
                                        <img src={instagramLogo} alt='Instagram' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
                                    </Link>

                                    <Link to='#'>
                                        <img src={whatsappLogo} alt='WhatsApp' className='socialLogo' style={{ width: '25px', margin: '0 10px' }} />
                                    </Link>

                                </li>

                                <li className="d-flex justify-content-lg-start justify-content-sm-center">
                                    <img src={solarLogo} alt="logo" style={{ width: "100px", height: "auto" }} />

                                </li>
                            </ul>


                        </div>




                    </div>
                </div>
                {/* <hr className="CustomColor" /> */}
                {/* Copyright Row */}
                <div className="row align-items-center justify-content-center mt-3">
                    <div className="col-12 text-center align-items-center justify-content-center d-flex">
                        <p className="text-secondary mb-0">
                            © Copyright 2025 Solarshineelctro | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
          .footer {
            background-color: white !important;
          }
          
  
          .text-secondary {
            font-size: 15px;
          }
  
          h5 {
            font-size: 1.3rem;
            font-weight: bold;
          }
  
          a:hover {
            color: rgb(0, 0, 0) !important;
            transition: color 0.3s ease;
          }
        `}</style>
        </footer>
    );
};

export default Footer;