import React from 'react'
import Product from "../components/Product";
import {ProductConsumer} from "../context/context";
import Title from "../components/Title"
export default function Products(){
        return (
            <ProductConsumer>
                
                {value => {
                    const {filteredProducts} = value;
                    console.log(filteredProducts);
                    return (

                        <section className="py-5">
                          <div className="container">
                          <Title center title="our Guitares" />
                           
                            <div className="row py-5">
                             {filteredProducts.map(product => {
                                  return <Product key={product.id} product={product}/>
                              })}
                            </div>
                          </div>
                        </section>
                    )
                }}
            </ProductConsumer>
        )
}
