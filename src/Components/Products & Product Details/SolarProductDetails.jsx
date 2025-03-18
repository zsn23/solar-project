// import { Link, useParams } from "react-router-dom";
// import p1 from "../../assets/p1.png";
// import cartLogo from "../../assets/cart.svg";
// import { useEffect } from "react";

// const Solarproducts = [
//     {
//         id: 1,
//         title: "Haier T-Door HRF-678TGG Refrigerator p-34732974",
//         price: "Rs355,000",
//         image: p1,
//         stackStatus:"In Stock" ,
//         descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         features: ["Energy efficient", "Smart temperature control", "Spacious storage","Energy efficient", "Smart temperature control", "Spacious storage"],
//     },
//     {
//         id: 2,
//         title: "PEL Life Pro Refrigerator PRLP 6360 p-34732974",
//         price: "Rs129,999",
//         image: p1,
//         descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         features: ["Fast cooling", "Elegant design", "Long-lasting durability","Energy efficient", "Smart temperature control", "Spacious storage"],
//     },
//     {
//         id: 3,
//         title: "PEL Ultra InverterOn Glass Door Refrigerator p-34732974",
//         price: "Rs126,999",
//         originalPrice: "Rs145,000",
//         image: p1,
//         descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
//     },
//     {
//         id: 4,
//         title: "PEL PRLP 2550 Life Pro Refrigerator p-34732974",
//         price: "Rs71,000",
//         originalPrice: "Rs79,000",
//         image: p1,
//         descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
//     },
// ];



// const SolarProductDetails = () => {
//     const { id } = useParams();
//     const product = Solarproducts.find((p) => p.id === parseInt(id));

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     if (!product) {
//         return <div className="container mt-5 text-center">Product not found</div>;
//     }

//     return (
//         <>
//             <div className="container-fluid border-top m-0 p-0 ">
//                 <div className="row g-0 d-flex justify-content-center ">
//                     <div className="col-md-5 d-flex mt-4 justify-content-center align-items-center ">
//                         <img src={product.image} alt={product.title} className="w-95"/>
//                     </div>
//                     <div className="col-md-5    p-3 d-flex justify-content-center align-items-start flex-column">
//                         <h2 className="fw-bolder ">{product.title}</h2>
//                         <h4 style={{fontWeight:"400"}} >{product.price}</h4>
//                         <h6 style={{fontWeight:"500",color:"#FF8E01"}} >{product.stackStatus}</h6>
//                         <h5>KEY FEATURES</h5>   
//                             <div>
//                             <ul style={{ listStyleType: 'disc' }}>
//                             {product.features.map((feature, index) => (
//                                 <li key={index}> {feature} </li>
//                             ))}
//                             </ul>
                           
//                             </div>
                           
                        
//                         <button className="btn btn-dark w-100 m-2 rounded-pill  fw-bolder">ADD TO CART</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="container-fluid ">
//                 {/* Solar Panel PRODUCT Heading */}
//                 <div className="row g-0 ">
//                     <div className="col-12 text-md-start text-center p-3 ">
//                         <h1 className="display-6 fw-semibold fs-2">More Related Products</h1>
//                     </div>
//                 </div>
//                 {/* Solar Panel PRODUCT Heading */}
//                 {/* Solarproducts Cards */}
//                 <div className="row g-0  justify-content-center">
//                     {Solarproducts.map((Solarproducts) => (
//                         <div
//                             key={Solarproducts.id}
//                             className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center"
//                         >
//                             <Link to={`/product/${Solarproducts.id}`} className="Customcard  d-flex flex-column text-decoration-none text-dark">
//                                 {/*Solarproducts img  */}
//                                 <div className="Customcard-img d-flex justify-content-center">
//                                     {/* Product Image */}
//                                     <img
//                                         src={Solarproducts.image}
//                                         alt={Solarproducts.title}
//                                         className="Customcard-img-top"
//                                     />
//                                 </div>
//                                 {/*Solarproducts img  */}

//                                 <div className="d-flex justify-content-between flex-column h-100">
//                                     {/*Solarproducts title & description  */}
//                                     <div className="Customcard-info d-flex flex-column justify-content-center align-items-center">
//                                         <span className="Customtext-title d-flex flex-nowrap">
//                                             {Solarproducts.title}{" "}
//                                         </span>
//                                         <span className="Customtext-body">
//                                             {Solarproducts.descrition}
//                                         </span>
//                                     </div>
//                                     {/*Solarproducts title & description  */}

//                                     {/*Solarproducts Price  & Cart icon */}
//                                     <div className="Customcard-footer border-top border-dark">
//                                         <span className="Customtext-title">
//                                             {Solarproducts.price}
//                                         </span>
//                                         <div className="Customcard-button">
//                                             <img
//                                                 src={cartLogo}
//                                                 alt="cartIcon"
//                                                 // style={{ width: '35px', margin: '0 10px' }}
//                                                 className=" Customsvg"
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* Solarproducts Price  & Cart icon */}
//                                 </div>

//                             </Link>
//                         </div>
//                     ))}
//                     <div className="d-flex justify-content-center align-items-center p-3 m-3 ">
//                         <Link className="text-decoration-none d-flex">
//                             <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">
//                                 SEE MORE SOLAR PANELS
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//                 {/*Solarproducts Product Cards */}
//             </div>
//         </>
//     );
// };

// export default SolarProductDetails;



import { Link, useParams } from "react-router-dom";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/solar-grid.webp";
import p3 from "../../assets/solar-grid-2.webp";
import cartLogo from "../../assets/cart.svg";
import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr"

const Solarproducts = [
    {
        id: 1,
        title: "Haier T-Door HRF-678TGG Refrigerator p-34732974",
        price: "Rs355,000",
        image: [p1,p2,p3],
        stackStatus: "In Stock",
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Energy efficient", "Smart temperature control", "Spacious storage", "Energy efficient", "Smart temperature control", "Spacious storage"],
    },
    {
        id: 2,
        title: "PEL Life Pro Refrigerator PRLP 6360 p-34732974",
        price: "Rs129,999",
        image: [p1,p2,p3],
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Fast cooling", "Elegant design", "Long-lasting durability", "Energy efficient", "Smart temperature control", "Spacious storage"],
    },
    {
        id: 3,
        title: "PEL Ultra InverterOn Glass Door Refrigerator p-34732974",
        price: "Rs126,999",
        originalPrice: "Rs145,000",
        image: [p1,p2,p3],
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
    },
    {
        id: 4,
        title: "PEL PRLP 2550 Life Pro Refrigerator p-34732974",
        price: "Rs71,000",
        originalPrice: "Rs79,000",
        image: [p1,p2,p3],
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
    },
];

const SolarProductDetails = () => {
    const { id } = useParams();
    const product = Solarproducts.find((p) => p.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const images = Array.isArray(product.image) ? product.image : [product.image];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="container mt-5 text-center">Product not found</div>;
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
        console.log(product.image.length)
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.image.length) % product.image.length);
    };

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    return (
        <>
            <div className="container-fluid border-top m-0 p-0 ">
                <div className="row g-0 d-flex justify-content-center ">
                    <div className="col-md-5 col-12 d-flex mt-4 justify-content-center align-items-center flex-column">

                        {/* <img src={Solarproducts[currentImageIndex].image} alt={Solarproducts[currentImageIndex].title} className="w-95" /> */}
                     
                        <img src={images[currentImageIndex]} alt={product.title} className="border border-2 border-opacity-75 rounded" style={{width:"70%",height:"auto"}} />
                       
                        <div className="d-flex justify-content-center m-2">
                    <button className="btn btn-dark rounded-pill m-1" onClick={handlePrevImage}  disabled={currentImageIndex === 0}><GrLinkPrevious /></button>

                        <button className="btn btn-dark rounded-pill m-1" onClick={handleNextImage} disabled={currentImageIndex === (product.image.length)-1}> <GrLinkNext />
                        </button>
                        </div>
                   
                      
                    </div>
                    <div className="col-md-5 col-12 p-3  d-flex justify-content-center align-items-start flex-column">
                        <h2 className="fw-bolder ">{product.title}</h2>
                        <h4 style={{ fontWeight: "400" }}>{product.price}</h4>
                        <h6 style={{ fontWeight: "500", color: "#FF8E01" }}>{product.stackStatus}</h6>
                        <h5>KEY FEATURES</h5>
                        <div>
                            <ul style={{ listStyleType: 'disc' }}>
                                {product.features.map((feature, index) => (
                                    <li key={index}> {feature} </li>
                                ))}
                            </ul>
                        </div>
                        <div className="d-flex align-items-center mb-3 border p-1  border-opacity-75 border-dark-subtle rounded-pill" style={{height:"40px"}}>
                            <button className="btn btn-dark rounded-pill h-5 d-flex justify-content-center align-items-center" onClick={() => handleQuantityChange(-1)} disabled={quantity === 1} >-</button>
                            <span className="mx-2">{quantity}</span>
                            <button className="btn btn-dark rounded-pill h-5 d-flex justify-content-center align-items-center" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button className="btn btn-dark w-100  rounded-pill fw-bolder">ADD TO CART</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                {/* Solar Panel PRODUCT Heading */}
                <div className="row g-0 ">
                    <div className="col-12 text-md-start text-center p-3 ">
                        <h1 className="display-6 fw-semibold fs-2">More Related Products</h1>
                    </div>
                </div>
                {/* Solar Panel PRODUCT Heading */}
                {/* Solarproducts Cards */}
                <div className="row g-0 justify-content-center">
                    {Solarproducts.map((Solarproducts) => (
                        <div
                            key={Solarproducts.id}
                            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center"
                        >
                            <Link to={`/product/${Solarproducts.id}`} className="Customcard d-flex flex-column text-decoration-none text-dark">
                                {/*Solarproducts img  */}
                                <div className="Customcard-img d-flex justify-content-center">
                                    {/* Product Image */}
                                    <img
                                        src={Solarproducts.image[0]}
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
                                                className="Customsvg"
                                            />
                                        </div>
                                    </div>
                                    {/* Solarproducts Price  & Cart icon */}
                                </div>

                            </Link>
                        </div>
                    ))}
                    <div className="d-flex justify-content-center align-items-center p-3 m-3 ">
                        <Link className="text-decoration-none d-flex">
                            <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">
                                SEE MORE SOLAR PANELS
                            </button>
                        </Link>
                    </div>
                </div>
                {/*Solarproducts Product Cards */}
            </div>
        </>
    );
};

export default SolarProductDetails;