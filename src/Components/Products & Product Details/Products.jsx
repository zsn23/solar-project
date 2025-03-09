import { Link } from "react-router-dom";
import cartLogo from "../../assets/cart.svg";
import p1 from "../../assets/p1.png";
// import ProductDetails from "./BatteryProductDetails";
// import { useState } from "react";

const Solarproducts = [
  {
    id: 1,
    title: "Haier T-Door HRF-678TGG Side By Side Refrigerator",
    price: "Rs355,000",
    image: p1,
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
  },
  {
    id: 2,
    title: "PEL Life Pro Refrigerator PRLP 6360",
    price: "Rs129,999",
    image: p1,
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Fast cooling", "Elegant design", "Long-lasting durability"],
  },
  {
    id: 3,
    title: "PEL Ultra InverterOn Glass Door Refrigerator PRUINVO 22260",
    price: "Rs126,999",
    originalPrice: "Rs145,000",
    image: p1,
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [],
  },
  {
    id: 4,
    title: "PEL PRLP 2550 Life Pro Refrigerator 9 cuft",
    price: "Rs71,000",
    originalPrice: "Rs79,000",
    image: p1,
    descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [],
  },
];

const Invertorproducts = [
  {
    id: 1,
    title: "Haier T-Door HRF-678TGG Side By Side Refrigerator",
    price: "Rs355,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "PEL Life Pro Refrigerator PRLP 6360",
    price: "Rs129,999",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "PEL Ultra InverterOn Glass Door Refrigerator PRUINVO 22260",
    price: "Rs126,999",
    originalPrice: "Rs145,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "PEL PRLP 2550 Life Pro Refrigerator 9 cuft",
    price: "Rs71,000",
    originalPrice: "Rs79,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Batteriesproducts = [
  {
    id: 1,
    title: "Haier T-Door HRF-678TGG Side By Side Refrigerator",
    price: "Rs355,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "PEL Life Pro Refrigerator PRLP 6360",
    price: "Rs129,999",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "PEL Ultra InverterOn Glass Door Refrigerator PRUINVO 22260",
    price: "Rs126,999",
    originalPrice: "Rs145,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "PEL PRLP 2550 Life Pro Refrigerator 9 cuft",
    price: "Rs71,000",
    originalPrice: "Rs79,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const productsAccesories = [
  {
    id: 1,
    title: "Haier T-Door HRF-678TGG Side By Side Refrigerator",
    price: "Rs355,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "PEL Life Pro Refrigerator PRLP 6360",
    price: "Rs129,999",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "PEL Ultra InverterOn Glass Door Refrigerator PRUINVO 22260",
    price: "Rs126,999",
    originalPrice: "Rs145,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "PEL PRLP 2550 Life Pro Refrigerator 9 cuft",
    price: "Rs71,000",
    originalPrice: "Rs79,000",
    image: p1,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Products = () => {
  return (
    <div className="container-fluid border-top p-5">
      {/* FEATURED PRODUCT Heading */}
      <div className="row g-0 ">
        <div className="col-12 text-center pb-5">
          <h1 className="display-4 fw-lighter">FEATURED PRODUCT</h1>
        </div>
      </div>
      {/* FEATURED PRODUCT Heading */}

      {/* Solar Panel PRODUCT Heading */}
      <div className="row g-0 ">
        <div className="col-12 text-md-start text-center p-3 ">
          <h1 className="display-6 fw-semibold fs-2">Solar Panel</h1>
        </div>
      </div>
      {/* Solar Panel PRODUCT Heading */}
      {/* Solarproducts Cards */}
      <div className="row  justify-content-center">
        {Solarproducts.map((Solarproducts) => (
          <div
            key={Solarproducts.id}
            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center"
          >
            <Link to={`/product/${Solarproducts.id}`} className="Customcard  d-flex flex-column text-decoration-none text-dark">
              {/*Solarproducts img  */}
              <div className="Customcard-img d-flex justify-content-center">
                {/* Product Image */}
                <img
                  src={Solarproducts.image}
                  alt={Solarproducts.title}
                  className="Customcard-img-top"
                />
              </div>
              {/*Solarproducts img  */}

              <div className="d-flex justify-content-between flex-column h-100">
                {/*Solarproducts title & description  */}
                <div className="Customcard-info d-flex flex-column justify-content-center align-items-center">
                  <span className="Customtext-title d-flex flex-nowrap">
                    {Solarproducts.title}{" "}
                  </span>
                  <span className="Customtext-body">
                    {Solarproducts.descrition}
                  </span>
                </div>
                {/*Solarproducts title & description  */}

                {/*Solarproducts Price  & Cart icon */}
                <div className="Customcard-footer border-top border-dark">
                  <span className="Customtext-title">
                    {Solarproducts.price}
                  </span>
                  <div className="Customcard-button">
                    <img
                      src={cartLogo}
                      alt="cartIcon"
                      // style={{ width: '35px', margin: '0 10px' }}
                      className=" Customsvg"
                    />
                  </div>
                </div>
                {/* Solarproducts Price  & Cart icon */}
              </div>
            
            </Link>
          </div>
        ))}
        <div className="d-flex justify-content-center align-items-center p-3 m-3 border-bottom">
          <Link className="text-decoration-none d-flex">
            <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">
              SEE MORE SOLAR PANELS
            </button>
          </Link>
        </div>
      </div>
      {/*Solarproducts Product Cards */}


      {/* Solar Invertor PRODUCT Heading */}
      <div className="row g-0 ">
        <div className="col-12 text-md-start text-center p-3">
          <h1 className="display-6 fw-semibold fs-2">Solar Invertor</h1>
        </div>
      </div>
      {/* Solar Invertor PRODUCT Heading */}
      {/* Invertorproducts Cards */}
      <div className="row  justify-content-center">
        {Invertorproducts.map((Invertorproducts) => (
          <div
            key={Invertorproducts.id}
            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center"
          >
            <div className="Customcard  d-flex flex-column">
              {/*Invertorproducts img  */}
              <div className="Customcard-img d-flex justify-content-center">
                {/* Invertorproducts Image */}
                <img
                  src={Invertorproducts.image}
                  alt={Invertorproducts.title}
                  className="Customcard-img-top"
                />
              </div>
              {/*Solarproducts img  */}

              <div className="d-flex justify-content-between flex-column h-100">
                {/*Invertorproducts title & description  */}
                <div className="Customcard-info d-flex flex-column justify-content-center align-items-center">
                  <span className="Customtext-title d-flex flex-nowrap">
                    {Invertorproducts.title}{" "}
                  </span>
                  <span className="Customtext-body">
                    {Invertorproducts.descrition}
                  </span>
                </div>
                {/*Invertorproducts title & description  */}

                {/*Invertorproducts Price  & Cart icon */}
                <div className="Customcard-footer border-top border-dark">
                  <span className="Customtext-title">
                    {Invertorproducts.price}
                  </span>
                  <div className="Customcard-button">
                    <img src={cartLogo} alt="cartIcon" className=" Customsvg" />
                  </div>
                </div>
                {/* Invertorproducts Price  & Cart icon */}
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center align-items-center p-3 m-3 border-bottom">
          <Link className="text-decoration-none d-flex">
            <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">
              SEE MORE INVERTOR
            </button>
          </Link>
        </div>
      </div>
      {/*Invertorproducts  Cards */}

      {/* Batteriesproducts Cards */}
      <div className="container-fluid">
        {/* Solar Batteries PRODUCT Heading */}
        <div className="row g-0 ">
          <div className="col-12 text-md-start text-center p-3 ">
            <h1 className="display-6 fw-semibold fs-2">Batteries</h1>
          </div>
        </div>
        {/* Solar Batteries PRODUCT Heading */}
        <div className="row  justify-content-center">
          {Batteriesproducts.map((Batteriesproducts) => (
            <div
              key={Batteriesproducts.id}
              className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center"

            >
              <div className="Customcard  d-flex flex-column">
                {/*Batteriesproducts img  */}
                <div className="Customcard-img d-flex justify-content-center">
                  {/* Batteriesproducts Image */}
                  <img
                    src={Batteriesproducts.image}
                    alt={Batteriesproducts.title}
                    className="Customcard-img-top"
                  />
                </div>
                {/*Batteriesproducts img  */}

                <div className="d-flex justify-content-between flex-column h-100">
                  {/*Batteriesproducts title & description  */}
                  <div className="Customcard-info d-flex flex-column justify-content-center align-items-center">
                    <span className="Customtext-title d-flex flex-nowrap">
                      {Batteriesproducts.title}{" "}
                    </span>
                    <span className="Customtext-body">
                      {Batteriesproducts.descrition}
                    </span>
                  </div>
                  {/*Batteriesproducts title & description  */}

                  {/*Batteriesproducts Price  & Cart icon */}
                  <div className="Customcard-footer border-top border-dark">
                    <span className="Customtext-title">
                      {Batteriesproducts.price}
                    </span>
                    <div className="Customcard-button">
                      <img src={cartLogo} alt="cartIcon" className=" Customsvg" />
                    </div>
                  </div>
                  {/* Batteriesproducts Price  & Cart icon */}
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center align-items-center p-3 m-3 border-bottom">
            <Link className="text-decoration-none d-flex">
              <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">
                SEE MORE BATTERIES
              </button>
            </Link>
          </div>
        </div>

      </div>
      {/*Batteriesproducts  Cards */}

      {/* Solar Accesories PRODUCT Heading */}
      <div className="row g-0 ">
        <div className="col-12 text-md-start text-center p-3 ">
          <h1 className="display-6 fw-semibold fs-2">Accesories</h1>
        </div>
      </div>
      {/* Solar Accesories PRODUCT Heading */}
      {/* productsAccesories Cards */}
      <div className="row  justify-content-center">
        {productsAccesories.map((productsAccesories) => (
          <div
            key={productsAccesories.id}
            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center"
          >
            <div className="Customcard  d-flex flex-column">
              {/*productsAccesories img  */}
              <div className="Customcard-img d-flex justify-content-center">
                {/* productsAccesories Image */}
                <img
                  src={productsAccesories.image}
                  alt={productsAccesories.title}
                  className="Customcard-img-top"
                />
              </div>
              {/*productsAccesories img  */}

              <div className="d-flex justify-content-between flex-column h-100">
                {/*productsAccesories title & description  */}
                <div className="Customcard-info d-flex flex-column justify-content-center align-items-center">
                  <span className="Customtext-title d-flex flex-nowrap">
                    {productsAccesories.title}{" "}
                  </span>
                  <span className="Customtext-body">
                    {productsAccesories.descrition}
                  </span>
                </div>
                {/*productsAccesories title & description  */}

                {/*productsAccesories Price  & Cart icon */}
                <div className="Customcard-footer border-top border-dark">
                  <span className="Customtext-title">
                    {productsAccesories.price}
                  </span>
                  <div className="Customcard-button">
                    <img src={cartLogo} alt="cartIcon" className=" Customsvg" />
                  </div>
                </div>
                {/* productsAccesories Price  & Cart icon */}
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center align-items-center m-3">
          <Link className="text-decoration-none d-flex">
            <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">
              SEE MORE ACCESORIES
            </button>
          </Link>
        </div>
      </div>
      {/*productsAccesories  Cards */}

    </div>
  );
};

export default Products;



