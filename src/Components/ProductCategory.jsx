
// const ProductCategory = () => {
//     return (
//         <>
//             <div className="container p-5">
//                 <div className="row g-0 align-item-center justify-content-center p-2 mb-5">
//                     <div className="col-12 text-center m-2 ">
//                         <h1 className="fw-bolder display-4">
//                             PRODUCT CATEGORIES
//                         </h1>
//                     </div>
//                 </div>

//                 <div className="row g-0 ">
//                     <div className="col-3 d-flex align-item-center justify-content-center ">
//                         <div className="CustomcardCategory">
//                             <div className="headingCustomcardCategory">
//                                 Skynet Studio
//                                 <p>Uiverse</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-3 d-flex align-item-center justify-content-center">
//                     <div className="CustomcardCategory">
//                             <div className="headingCustomcardCategory">
//                                 Skynet Studio
//                                 <p>Uiverse</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-3 d-flex align-item-center justify-content-center">
//                     <div className="CustomcardCategory">
//                             <div className="headingCustomcardCategory">
//                                 Skynet Studio
//                                 <p>Uiverse</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-3 d-flex align-item-center justify-content-center">
//                     <div className="CustomcardCategory">
//                             <div className="headingCustomcardCategory">
//                                 Skynet Studio
//                                 <p>Uiverse</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProductCategory




import productSolar from '../assets/solar-panel-card.svg';
// import product2 from '../assets/product2.png';
// import product3 from '../assets/product3.png';
// import product4 from '../assets/product4.png';

const ProductCategory = () => {
    // Product categories with unique title and image
    const categories = [
        { title: "Solar Panel", image: productSolar },
        { title: "Inverter", image: productSolar },
        { title: "Batteries", image: productSolar },
        { title: "Solar Accesories", image: productSolar }
    ];

    return (
        <div className="container-fluid border-top  mb-5">
            <div className="row g-0 align-items-center justify-content-center p-2 m-3">
                <div className="col-12 text-center mb-3">
                    <h1 className=" display-3 fw-lighter" >
                        PRODUCT CATEGORIES
                    </h1>
                </div>
            </div>

            {/* Row for Product Categories */}
            <div className="row g-4 justify-content-center p-4 align-items-center  border-bottom">
                {categories.map((category, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center">
                        <div className="CustomcardCategory ">
                            <img src={category.image} alt={category.title} className="category-image" />
                            <div className="headingCustomcardCategory">
                                {category.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

             {/* FEATURED PRODUCT Heading */}
      <div className="row g-0 ">
        <div className="col-12 text-center mt-5">
          <h1 className="display-4 fw-lighter m-0 ">FEATURED PRODUCT</h1>
        </div>
      </div>
    
      {/* FEATURED PRODUCT Heading */}
        </div>
    );
};

export default ProductCategory;

