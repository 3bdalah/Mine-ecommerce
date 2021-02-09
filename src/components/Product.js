import React from 'react'
import styled from "styled-components";
import {ProductConsumer} from "../context/context";
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";
export default function Product({product}) {
    return (
        <ProductConsumer>
          {value => {
              const {setSingleProduct} = value;
             return(
                 <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
                     <div className="card">
                        <div className="img-container">
                           <img 
                           src ={product.image} className="card-img-top" alt="product" />
                           <div className="product-icons">
                              <Link  to={`/products/${product.id}`}  onClick={() => setSingleProduct(product.id)}>
                                  <FaSearch className="icon"/>
                              </Link>
                           </div>
                        </div>
                     </div>

                 </ProductWrapper>
             )
          }}
        </ProductConsumer>
    )
}


const ProductWrapper = styled.div `
    .card{
        box-shadow: 5px 5px 50px 0px rgba(5, 5, 5, 0.3);
        transition: var(--mainTransition);
         /* padding:0px !important; */
         
         border:4px solid var(--primaryColor);
         
    }
    .card:hover{
        box-shadow:3px 3px 5px 0px rgba(0,0,0,0.5);
        cursor:pointer;
    }

    .card-img-top{
        transition: var(--mainTransition);
        width:100%;
        height:360px;
       
        /* margin:0px; */
    }
    .card:hover .card-img-top{
    /* transform:scale(1.15); */
    border-radius:0;
    opacity:0.3;}

    .img-container{
        /* position:relative; */
    }
    .product-icons{
        transition: var(--mainTransition);
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        opacity:0;
    }
    .icon{
        font-size: 2.5rem;
        margin:1rem;
        padding:0.5rem;
        color:var(--primaryColor);
        border-radius:0.5rem;
        background:var(--mainWhite);
    }
    .card:hover .product-icons {
        opacity: 1;
    }
    .card-body {
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`