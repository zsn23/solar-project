import { Link, useParams } from "react-router-dom";
import p1 from "../../assets/p1.png";
import cartLogo from "../../assets/cart.svg";
import { useEffect } from "react";

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



const SolarProductDetails = () => {
    const { id } = useParams();
    const product = Solarproducts.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="container mt-5 text-center">Product not found</div>;
    }

    return (
        <>
            <div className="container-fluid bg-light border m-0 p-0 ">
                <div className="row g-0">
                    <div className="col-md-6 d-flex mt-4 justify-content-center align-items-center m-0 p-0">
                        <img src={product.image} alt={product.title} className="w-50 h-auto" />
                    </div>
                    <div className="col-md-6 mb-4 p-3 d-flex justify-content-center align-items-md-start align-items-sm-center  flex-column">
                        <h2>{product.title}</h2>
                        <h4 >{product.price}</h4>
                        <p>{product.descrition}</p>
                        <h5>Features:</h5>
                        
                            {product.features.map((feature, index) => (
                                <p key={index}>{feature}</p>
                            ))}
                       
                        <button className="btn btn-warning ">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid border-top">
                {/* Solar Panel PRODUCT Heading */}
                <div className="row g-0 ">
                    <div className="col-12 text-md-start text-center p-3 ">
                        <h1 className="display-6 fw-bolder fs-2">More Related Products</h1>
                    </div>
                </div>
                {/* Solar Panel PRODUCT Heading */}
                {/* Solarproducts Cards */}
                <div className="row g-0  justify-content-center">
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
