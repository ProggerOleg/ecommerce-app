import React from "react";
import { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const [orderProduct] = useState(true);
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div className="img-fluid">
                <img
                  src="https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom pb-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 text-secondary">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>{" "}
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>{" "}
                  <p className="product-data">Havens</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>{" "}
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>{" "}
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Avalability :</h3>{" "}
                  <p className="product-data">In stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>{" "}
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>{" "}
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>{" "}
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>{" "}
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>{" "}
                  <div className="">
                    <input
                      type="number"
                      name=""
                      placeholder={1}
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      ADD TO CART
                    </button>
                    <button className="button signup border-0">
                      Buy It Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/compare">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/wishlist">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div
                  className="accordion d-flex flex-column gap-10 align-items-center my-4"
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button product-heading text-dark"
                        type="button"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Shipping & Returns :
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body product-data">
                        Free shipping and returns avaliable on all orders!{" "}
                        <br /> We ship all US domestic orders within{" "}
                        <b>5-10 business days!</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper pb-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-4">
              <h3>Description</h3>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                placeat magnam ratione. Ab voluptatibus libero ducimus placeat
                sapiente quos atque incidunt quibusdam magnam, at enim fugit
                temporibus sequi? Dolore, est. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Perspiciatis nihil quasi
                perferendis, odio laudantium dolorum nemo ratione libero
                repudiandae, at eligendi blanditiis animi similique corrupti.
                Odio ab voluptates itaque labore?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper pb-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="review-inner-wrapper">
              <h3 id="review">Reviews</h3>
              <div className="review-head d-flex justify-content-between align-items-end mt-3 mb-2">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderProduct && (
                  <div>
                    <a
                      className="text-dark text-decoration-underline"
                      href="fs"
                    >
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="reviews mt-3">
                <div className="review">
                  <div className="d-flex gap-15 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis cum fugiat maxime autem non quia corporis? Aperiam,
                    aut molestiae fugit, nihil illo magnam mollitia pariatur
                    laudantium est natus iste deserunt.
                  </p>
                </div>
                <div className="review">
                  <div className="d-flex gap-15 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis cum fugiat maxime autem non quia corporis? Aperiam,
                    aut molestiae fugit, nihil illo magnam mollitia pariatur
                    laudantium est natus iste deserunt.
                  </p>
                </div>
                <div className="review">
                  <div className="d-flex gap-15 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis cum fugiat maxime autem non quia corporis? Aperiam,
                    aut molestiae fugit, nihil illo magnam mollitia pariatur
                    laudantium est natus iste deserunt.
                  </p>
                </div>
              </div>
              <div className="review-form pt-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>

                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>{" "}
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper pb-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
