import React from "react";
import "./Content.css";
import Product from "./Product";

function Content() {
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__row">
          <Product
            id="1"
            title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            price={109.95}
            category="men clothing"
            image="http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_bag_01.jpg"
          />
          <Product
            id="2"
            title="Mens Casual Premium Slim Fit T-Shirts"
            price={22.3}
            category="men clothing"
            image="http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_shirt_01.jpg"
          />
        </div>
        <div className="content__row">
          <Product
            id="3"
            title="Mens Cotton Jacket"
            price="55.99"
            category="men clothing"
            image="http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_jacket_02.jpg"
          />
          <Product
            id="4"
            title="Mens Casual Slim Fit"
            price="15.99"
            category="men clothing"
            image="http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/m_shirt_02.jpg"
          />
          <Product
            id="5"
            title="John Hardy Women's Legends Naga Gold Silver Dragon Station Chain Bracelet"
            price="695"
            category="jewelery"
            image="http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/jewlery_04.jpg"
          />
        </div>
        <div className="content__row">
          <Product
            id="9"
            title="WD 2TB Elements Portable External Hard Drive - USB 3.0"
            price="64"
            category="electronics"
            image="http://demo35067.appliances.dev.rwsgateway.com/fe-dev-test-files/electronic_01.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
