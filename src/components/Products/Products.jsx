import React from "react";
import "./Products.css";
import productsBg from "../../assets/products-bg.jpg";
import butterImg from "../../assets/butter.jpg";
import gheeImg from "../../assets/ghee.png";
import milkImg from "../../assets/milk.jpg";

const Products = () => {
  const productList = [
    {
      title: "Ghee",
      img: gheeImg,
      description: "This is Ghee.",
    },
    {
      title: "Milk",
      img: milkImg,
      description: "This is Milk.",
    },
    {
      title: "Butter",
      img: butterImg,
      description: "This is butter.",
    },
  ];

  return (
    <section className="product-section" id="products">
      <div
        className="product-container"
        style={{ backgroundImage: `url(${productsBg})` }}
      >
        <div className="container-title">What We Offer</div>
        <div className="product-grid">
          {productList.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img
                  src={product.img}
                  alt="product"
                />
              </div>
              <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
