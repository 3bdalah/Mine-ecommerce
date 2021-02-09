import React from 'react'
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default function SingleProduct() {
    return (

        <>
           <ProductConsumer>
                {value => {
                    const {singleProduct,loading} = value;
                    if (loading) {
                        console.log("hello from loading");
                        return <h1>product loading....</h1>;
                      }
                    const {company,price ,description,id,title,image}= singleProduct;
                    return (
                     <section className="py-5">
                       <div className="container">
                        <div className="row">
                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                           <div className="img-box">
                           <img 
                             src={`../${image}`}
                             alt="single product"
                             className="img-fluid"/>
                           </div>
                         </div>
                         <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                            <h5 className="text-title mb-4">model :{title} </h5>
                            <h5 className="text-capitalize text-muted mb-4">
                                 company : {company}
                            </h5>
                            <h5 className="text-main text-capitalize mb-4">
                                 price : ${price}
                            </h5>
                            <p className="text-capitalize text-title mt-3">
                                some info about product :
                            </p>
                            <p> {description}</p>
                            <Link
                            to="/products"
                            className="main-link"
                            style={{ margin: "0.75rem" }}
                            >
                            back to products
                            </Link>
                         </div>
                        </div>
                       </div>
                     </section>
                    )
                }}
            </ProductConsumer>
        </>
    )
}
