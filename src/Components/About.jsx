import Logo1 from '../assets/AboutPic3.jpg';
import Logo2 from '../assets/AboutPic1.jpg';
import StatsRow from './StatsRow';
const About = () => {
  return (
    <>

      <div className="container-fluid border-top m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-lg-6 py-3 bgcolor d-flex flex-column justify-content-center">
            <h1 className='text-center fw-bolder'>Our Story</h1>
            <p className='m-2'>
            At Solar Shine Electro, we are dedicated to revolutionizing the renewable energy sector by providing cutting-edge solar solutions. Our journey began with a simple vision—to make solar energy accessible, affordable, and efficient for everyone. With a team of passionate experts, we are committed to empowering homes and businesses with sustainable energy solutions that reduce dependency on conventional power sources.Over the years, we have built a strong reputation for delivering high-quality solar products, expert consultation, and seamless installation services. Whether you are looking for solar panels, inverters, batteries, or accessories, we ensure that our customers receive the best solutions tailored to their energy needs.
            </p>

            <div className='d-flex flex-column align-items-start'>
                <h5>Our Process</h5>
            <div className="  process-step">
              <div className="process-icon">
                <i className="bi bi-check-circle" style={{color:"#FF8E01"}}></i>
                <span className='p-2'>We collaborate with trusted manufacturers to bring you top-tier solar technology.</span>
              </div>
            </div>
            <div className="  process-step">
              <div className="process-icon">
                <i className="bi bi-check-circle" style={{color:"#FF8E01"}}></i>
                <span className='p-2'>Our products are carefully classified to help you find exactly what you need.</span>
              </div>
            </div>
            <div className="  process-step">
              <div className="process-icon">
                <i className="bi bi-check-circle" style={{color:"#FF8E01"}}></i>
                <span className='p-2'>We keep our platform updated with the latest products and innovations in the solar industry.</span>
              </div>
            </div>
            </div>

            
          </div>
          <div className="col-lg-6 m-0 d-flex p-0" >
            <img src={Logo1} className="w-100 h-auto" alt="Story" />
          </div>
        </div>

        <div className="row m-0 p-0 flex-wrap-reverse">
          <div className="col-lg-6 d-flex m-0 p-0" >
            <img src={Logo2} className="w-100 h-auto" alt="Story" />
          </div>
          <div className="col-lg-6 bgcolor d-flex flex-column  justify-content-center py-3">
            <h2 className='text-center fw-bolder'>Ensuring Customer Satisfaction and Trust</h2>

            <p  >
            At Solar Shine Electro, customer satisfaction is at the core of our mission. We understand that switching to solar energy is an important investment, and we are here to ensure that your transition is smooth, informed, and beneficial in the long run.
            </p>


            <div className=" d-flex align-items-center mt-3">
              <div>
                <h6 className="mb-1 fw-bold">🔒 Transparent and Ethical Practices </h6>
                <p>We operate with integrity and ensure complete transparency in our pricing and services.</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div>
                <h6 className="mb-1 fw-bold">📜 Verified and Credible Information</h6>
                <p>Every product we offer is backed by reliable data, helping you make informed decisions.</p>
              </div>

            </div>

            <div className=" d-flex align-items-center">
              <div>
                <h6 className="mb-1 fw-bold">📈 Proven Track Record</h6>
                <p>With numerous successful installations and satisfied customers, we take pride in being a trusted name in the solar industry.</p>
              </div>
            </div>

          </div>
        </div>
        <StatsRow />
      </div>
    </>
  );
}

export default About;
