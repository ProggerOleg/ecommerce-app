import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="compare" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honour T1.7.0 16GB ROM 7 inch with WiFi + 3G Tablet
                  </h5>
                  <h6 className="price mb-3">$ 100</h6>

                  <div>
                    <div className="product-detail ">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail ">
                      <h5>Type:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail ">
                      <h5>SKU:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail ">
                      <h5>Avalability:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail ">
                      <h5>Color:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail ">
                      <h5>Size:</h5>
                      <p>Havels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
