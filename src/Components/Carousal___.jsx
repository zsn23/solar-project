// import { useEffect, useState } from "react";
// import s1 from "../assets/s1.png";
// import s2 from "../assets/s2.png";
// import s3 from "../assets/s3.png";

// const Carousal___ = () => {
//   const images = [s1, s2, s3]; // Store images in an array
//   const [backgroundImage, setBackgroundImage] = useState(images[0]);

//   useEffect(() => {
//     let currentIndex = 0;
//     const changeBackgroundImage = () => {
//       currentIndex = (currentIndex + 1) % images.length;
//       setBackgroundImage(images[currentIndex]); // Update state properly
//     };

//     const interval = setInterval(changeBackgroundImage, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="">
//       <div
//         className="bg-fixed bg-cover bg-center transition-all duration-1000"
//         style={{ backgroundImage: `url(${backgroundImage})`, height: "600px" , transition:"1s"}}
//       >
//         <div className="h-full flex items-center justify-end">
//           <h1 className="text-white text-[75px] font-semibold mb-[200px] mr-10">
//             HELLO WORLD
//           </h1>
//         </div>
//       </div>

//   <h1 className="text-white text-[75px] font-semibold mb-[200px] mr-10">
//         HELLO WORLD
//       </h1> <h1 className="text-white text-[75px] font-semibold mb-[200px] mr-10">
//         HELLO WORLD
//       </h1> <h1 className="text-white text-[75px] font-semibold mb-[200px] mr-10">
//         HELLO WORLD
//       </h1> <h1 className="text-white text-[75px] font-semibold mb-[200px] mr-10">
//         HELLO WORLD
//       </h1> <h1 className="text-white text-[75px] font-semibold mb-[200px] mr-10">
//         HELLO WORLD
//       </h1> 
//     </div>
//   );
// };

// export default Carousal___;

import s3 from "../assets/solar-inverter.png";
import s2 from "../assets/solarandinverter.png";
import s1 from "../assets/solar-panels.png";

const Carousal___ = () => {

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators " style={{ height: "5px" }}>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={s1} className="d-block w-100" alt="FirstSlide" />
          <div className="carousel-caption d-none d-md-block">

          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={s2} className="d-block w-100" alt="SecondSlide" />
          <div className="carousel-caption d-none d-md-block">

          </div>
        </div>

        <div className="carousel-item">
          <img src={s3} className="d-block w-100" alt="ThirdSlide" data-bs-interval="3000" />
          <div className="carousel-caption d-none d-md-block">

          </div>
        </div>
      </div>

      <button className="carousel-control-prev justify-content-start  m-2" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next justify-content-end overflow-hidden  m-2" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
};

export default Carousal___;