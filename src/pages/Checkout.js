import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Wanted</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="text-dark total-price" href="/cart">
                      Cart&nbsp;
                    </a>
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">
                Oleh Tarnavchuk(olegtar25@gmail.com)
              </p>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" disabled selected>
                      Select Country
                    </option>
                    <option value="">USA</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="First name (optional)"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="Last name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    placeholder="Address"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    placeholder="Apartment, suite, etc. (optional)"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="City"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="ct" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="ZIP code"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="" />
                      &nbsp; Return to cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to order
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-15">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="title">Kid Headphones </h5>
                    <p>s/ asldkfja</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="costs">Subtotal</p>
                <p className="costs"> $ 100000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 costs">Shipping</p>
                <p className="mb-0 costs">$ 100000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-botom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 100000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
