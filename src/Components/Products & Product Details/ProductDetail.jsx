import  { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import cartLogo from "../../assets/cart.svg"; // Adjust the path as needed
import { ProductContext_ } from "../../context/ProductContext_";

const ProductDetail = () => {
    const { id } = useParams();
    const { solarProducts, inverterProducts, batteryProducts, accessoryProducts } = useContext(ProductContext_);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

     useEffect(() => {
            window.scrollTo(0, 0);
        }, [id]);

    // Determine which product array to use based on the URL
    const category = window.location.pathname.split("/")[1]; // e.g., "solar-product", "inverter-product", etc.
    const products =
        category === "solar-product"
            ? solarProducts
            : category === "inverter-product"
            ? inverterProducts
            : category === "battery-product"
            ? batteryProducts
            : accessoryProducts;

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div className="container mt-5 text-center">Product not found</div>;
    }

    

    const images = Array.isArray(product.image) ? product.image : [product.image];

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
            {/* Product Details Section */}
            <div className="container-fluid border-top m-0 p-0 ">
                <div className="row g-0 d-flex justify-content-center ">
                    {/* Product Image Carousel */}
                    <div className="col-md-5 col-12 d-flex mt-4 justify-content-center align-items-center flex-column">
                        <img
                            src={images[currentImageIndex]}
                            alt={product.title}
                            className="border border-2 border-opacity-75 rounded"
                            style={{ width: "70%", height: "auto" }}
                        />
                        <div className="d-flex justify-content-center m-2">
                            <button
                                className="btn btn-dark rounded-pill m-1"
                                onClick={handlePrevImage}
                                disabled={currentImageIndex === 0}
                            >
                                <GrLinkPrevious />
                            </button>
                            <button
                                className="btn btn-dark rounded-pill m-1"
                                onClick={handleNextImage}
                                disabled={currentImageIndex === images.length - 1}
                            >
                                <GrLinkNext />
                            </button>
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="col-md-5 col-12 p-3 d-flex justify-content-center align-items-start flex-column">
                        <h2 className="fw-bolder">{product.title}</h2>
                        <h4 style={{ fontWeight: "400" }}>{product.price}</h4>
                        <h6 style={{ fontWeight: "500", color: "#FF8E01" }}>
                            {product.stockStatus || "In Stock"}
                        </h6>
                        <h5>KEY FEATURES</h5>
                        <div>
                            <ul style={{ listStyleType: "disc" }}>
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="d-flex align-items-center mb-3 border p-1 border-opacity-75 border-dark-subtle rounded-pill"
                            style={{ height: "40px" }}
                        >
                            <button
                                className="btn btn-dark rounded-pill h-5 d-flex justify-content-center align-items-center"
                                onClick={() => handleQuantityChange(-1)}
                                disabled={quantity === 1}
                            >
                                -
                            </button>
                            <span className="mx-2">{quantity}</span>
                            <button
                                className="btn btn-dark rounded-pill h-5 d-flex justify-content-center align-items-center"
                                onClick={() => handleQuantityChange(1)}
                            >
                                +
                            </button>
                        </div>
                        <button className="btn btn-dark w-100 rounded-pill fw-bolder">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

            {/* More Related Products Section */}
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-12 text-md-start text-center p-3">
                        <h1 className="display-6 fw-semibold fs-2">More Related Products</h1>
                    </div>
                </div>
                <div className="row g-0 justify-content-center">
                    {products.map((relatedProduct) => (
                        <div
                            key={relatedProduct.id}
                            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 p-0 d-flex justify-content-center align-items-center"
                        >
                            <Link
                                to={`/${category}/${relatedProduct.id}`} // Dynamically generate the correct route
                                className="Customcard d-flex flex-column text-decoration-none text-dark"
                            >
                                <div className="Customcard-img d-flex justify-content-center">
                                    <img
                                        src={Array.isArray(relatedProduct.image) ? relatedProduct.image[0] : relatedProduct.image}
                                        alt={relatedProduct.title}
                                        className="Customcard-img-top"
                                    />
                                </div>
                                <div className="d-flex justify-content-between flex-column h-100">
                                    <div className="Customcard-info d-flex flex-column justify-content-center align-items-center">
                                        <span className="Customtext-title d-flex flex-nowrap">
                                            {relatedProduct.title}
                                        </span>
                                        <span className="Customtext-body">
                                            {relatedProduct.descrition}
                                        </span>
                                    </div>
                                    <div className="Customcard-footer border-top border-dark">
                                        <span className="Customtext-title">
                                            {relatedProduct.price}
                                        </span>
                                        <div className="Customcard-button">
                                            <img src={cartLogo} alt="cartIcon" className="Customsvg" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <div className="d-flex justify-content-center align-items-center p-3 m-3">
                        <Link className="text-decoration-none d-flex">
                            <button className="btn btn-transparent btn-outline-dark btn-md btnFw rounded-pill d-flex align-items-center justify-content-center">
                                SEE MORE PRODUCTS
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;