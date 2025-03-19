import { Link, useParams } from "react-router-dom";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/solar-grid.webp";
import p3 from "../../assets/solar-grid-2.webp";
import cartLogo from "../../assets/cart.svg";
import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Invertorproducts = [
    {
        id: 1,
        title: "Solar inverter 1",
        price: "Rs355,000",
        image: [p1, p2, p3],
        stockStatus: "In Stock",
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Energy efficient", "Smart temperature control", "Spacious storage", "Energy efficient", "Smart temperature control", "Spacious storage"],
    },
    {
        id: 2,
        title: "Solar inverter 2",
        price: "Rs129,999",
        image: [p1, p2, p3],
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Fast cooling", "Elegant design", "Long-lasting durability", "Energy efficient", "Smart temperature control", "Spacious storage"],
    },
    {
        id: 3,
        title: "Solar inverter 3",
        price: "Rs126,999",
        originalPrice: "Rs145,000",
        image: [p1, p2, p3],
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
    },
    {
        id: 4,
        title: "Solar inverter 4",
        price: "Rs71,000",
        originalPrice: "Rs79,000",
        image: [p1, p2, p3],
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
    },
];

const InverterProductDetail = () => {
    const { id } = useParams();
    const product = Invertorproducts.find((p) => p.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="container mt-5 text-center">Product not found</div>;
    }

    
    const images = Array.isArray(product.image) ? product.image : [product.image];

    if (images.length === 0) {
        console.error("No images found for the product");
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    return (
        <>
            <div className="container-fluid border-top m-0 p-0 ">
                <div className="row g-0 d-flex justify-content-center ">
                    <div className="col-md-5 col-12 d-flex mt-4 justify-content-center align-items-center flex-column">
                        <img src={images[currentImageIndex]} alt={product.title} className="border border-2 border-opacity-75 rounded" style={{ width: "70%", height: "auto" }} />
                        <div className="d-flex justify-content-center m-2">
                            <button className="btn btn-dark rounded-pill m-1" onClick={handlePrevImage} disabled={currentImageIndex === 0}><GrLinkPrevious /></button>
                            <button className="btn btn-dark rounded-pill m-1" onClick={handleNextImage} disabled={currentImageIndex === (images.length) - 1}> <GrLinkNext /></button>
                        </div>
                    </div>
                    <div className="col-md-5 col-12 p-3  d-flex justify-content-center align-items-start flex-column">
                        <h2 className="fw-bolder ">{product.title}</h2>
                        <h4 style={{ fontWeight: "400" }}>{product.price}</h4>
                        <h6 style={{ fontWeight: "500", color: "#FF8E01" }}>{product.stockStatus}</h6>
                        <h5>KEY FEATURES</h5>
                        <div>
                            <ul style={{ listStyleType: 'disc' }}>
                                {product.features.map((feature, index) => (
                                    <li key={index}> {feature} </li>
                                ))}
                            </ul>
                        </div>
                        <div className="d-flex align-items-center mb-3 border p-1  border-opacity-75 border-dark-subtle rounded-pill" style={{ height: "40px" }}>
                            <button className="btn btn-dark rounded-pill h-5 d-flex justify-content-center align-items-center" onClick={() => handleQuantityChange(-1)} disabled={quantity === 1}>-</button>
                            <span className="mx-2">{quantity}</span>
                            <button className="btn btn-dark rounded-pill h-5 d-flex justify-content-center align-items-center" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button className="btn btn-dark w-100  rounded-pill fw-bolder">ADD TO CART</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="row g-0 ">
                    <div className="col-12 text-md-start text-center p-3 ">
                        <h1 className="display-6 fw-semibold fs-2">More Related Products</h1>
                    </div>
                </div>
                <div className="row g-0 justify-content-center">
                    {Invertorproducts.map((Invertorproducts) => (
                        <div key={Invertorproducts.id} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center">
                            <Link to={`/inverterProduct/${Invertorproducts.id}`} className="Customcard d-flex flex-column text-decoration-none text-dark">
                                <div className="Customcard-img d-flex justify-content-center">
                                    <img src={Invertorproducts.image[0]} alt={Invertorproducts.title} className="Customcard-img-top" />
                                </div>
                                <div className="d-flex justify-content-between flex-column h-100">
                                    <div className="Customcard-info d-flex flex-column justify-content-center align-items-center">
                                        <span className="Customtext-title d-flex flex-nowrap">{Invertorproducts.title} </span>
                                        <span className="Customtext-body">{Invertorproducts.descrition}</span>
                                    </div>
                                    <div className="Customcard-footer border-top border-dark">
                                        <span className="Customtext-title">{Invertorproducts.price}</span>
                                        <div className="Customcard-button">
                                            <img src={cartLogo} alt="cartIcon" className="Customsvg" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <div className="d-flex justify-content-center align-items-center p-3 m-3 ">
                        <Link className="text-decoration-none d-flex">
                            <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">SEE MORE SOLAR PANELS</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InverterProductDetail;