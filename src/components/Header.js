import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import menu from "../images/menu.svg";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+38 099 250 67 01">
                  +38 099 250 67 01
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  WANTED
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/compare-product"
                  >
                    <img src="/images/compare.svg" alt=""></img>
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/wishlist"
                  >
                    <img src="/images/wishlist.svg" alt="wishlist"></img>
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/login"
                  >
                    <img src="/images/user.svg" alt="user"></img>
                    <p>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/cart"
                  >
                    <img src="/images/cart.svg" alt="cart"></img>
                    <div className="d-flex flex-column">
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ width: "75px" }}
                      >
                        <div>Items:{"  "}</div>
                        <span className="badge bg-white text-dark">0</span>
                      </div>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu"></img>
                      <span className="me-5 d-inline-blick">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="" className="dropdown-item text-white">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item text-white">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item text-white">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-item-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/product">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/blog">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
