import  { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import p1 from "../assets/p1.png"; // Adjust the path as needed
import p2 from "../assets/solar-grid.webp"; // Adjust the path as needed
import p3 from "../assets/solar-grid-2.webp"; // Adjust the path as needed

// Create a context for products
export const ProductContext_ = createContext();

// Create a provider component
export const ProductProvider_ = ({ children }) => {
    const [solarProducts] = useState([
        {
            id: 1,
            title: "Solar Product 1",
            price: "Rs355,000",
            image: [p1, p2, p3],
            stockStatus: "In Stock",
            descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
          },
          {
            id: 2,
            title: "Solar Product 2",
            price: "Rs129,999",
            image: [p1, p2, p3],
            stockStatus: "In Stock",
            descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            features: ["Fast cooling", "Elegant design", "Long-lasting durability"],
          },
          {
            id: 3,
            title: "Solar Product 3",
            price: "Rs126,999",
            originalPrice: "Rs145,000",
            image: [p1, p2, p3],
            stockStatus: "In Stock",
            descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            features: ["Fast cooling", "Elegant design", "Long-lasting durability"],
          },
          {
            id: 4,
            title: "Solar Product 4",
            price: "Rs71,000",
            originalPrice: "Rs79,000",
            image: [p1, p2, p3],
            stockStatus: "In Stock",
            descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            features: ["Fast cooling", "Elegant design", "Long-lasting durability"],
          },
    ]);

    const [inverterProducts] = useState([
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
    ]);

    const [batteryProducts] = useState([
         {
                id: 1,
                title: "Battery 1",
                price: "Rs355,000",
                image: [p1, p2, p3],
                stockStatus: "In Stock",
                descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                features: ["Energy efficient", "Smart temperature control", "Spacious storage", "Energy efficient", "Smart temperature control", "Spacious storage"],
            },
            {
                id: 2,
                title: "Battery 2",
                price: "Rs129,999",
                image: [p1, p2, p3],
                descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                features: ["Fast cooling", "Elegant design", "Long-lasting durability", "Energy efficient", "Smart temperature control", "Spacious storage"],
            },
            {
                id: 3,
                title: "Battery 3",
                price: "Rs126,999",
                originalPrice: "Rs145,000",
                image: [p1, p2, p3],
                descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
            },
            {
                id: 4,
                title: "Battery 4",
                price: "Rs71,000",
                originalPrice: "Rs79,000",
                image: [p1, p2, p3],
                descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
            },
    ]);

    const [accessoryProducts] = useState([
           {
               id: 1,
               title: "Accesory 1",
               price: "Rs355,000",
               image: [p1, p2, p3],
               stockStatus: "In Stock",
               descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               features: ["Energy efficient", "Smart temperature control", "Spacious storage", "Energy efficient", "Smart temperature control", "Spacious storage"],
           },
           {
               id: 2,
               title: "Accesory 2",
               price: "Rs129,999",
               image: [p1, p2, p3],
               descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               features: ["Fast cooling", "Elegant design", "Long-lasting durability", "Energy efficient", "Smart temperature control", "Spacious storage"],
           },
           {
               id: 3,
               title: "Accesory 3",
               price: "Rs126,999",
               originalPrice: "Rs145,000",
               image: [p1, p2, p3],
               descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
           },
           {
               id: 4,
               title: "Accesory 4",
               price: "Rs71,000",
               originalPrice: "Rs79,000",
               image: [p1, p2, p3],
               descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               features: ["Energy efficient", "Smart temperature control", "Spacious storage"],
           },
    ]);

    return (
        <ProductContext_.Provider value={{ solarProducts, inverterProducts, batteryProducts, accessoryProducts }}>
            {children}
        </ProductContext_.Provider>
    );
};

// Add PropTypes validation
ProductProvider_.propTypes = {
    children: PropTypes.node.isRequired, // Validate children prop
};