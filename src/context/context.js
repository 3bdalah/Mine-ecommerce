import React, { Component } from 'react';
import {items} from "./productData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        carTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
      };
      // Create ComponentDidmount 
      componentDidMount(){
       this.setProducts(items);
      }
      
      // Create function Set products 
      setProducts = products => {
          let storeProducts = products.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = { id, ...item.fields, image };
            return product;
          });
         this.setState({
             storeProducts,
             filteredProducts:storeProducts,
             singleProduct:this.getStoragaProducts(),
             loading: false
         })
      }
      // Get Product from local storage 
      getStoragaProducts = () => {
        return localStorage.getItem("singleProduct") ? JSON.parse(localStorage.getItem("singleProduct")):{};
      };

      // set single product 
      setSingleProduct = id => {
          let product = this.state.storeProducts.find(item => item.id=== id);
          localStorage.setItem("singleProduct",JSON.stringify(product));
          this.setState({
              singleProduct: {...product},
              loading:false
          });
      };
    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                setSingleProduct:this.setSingleProduct}}>
                {this.props.children}
            </ProductContext.Provider >
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductContext, ProductConsumer, ProductProvider };