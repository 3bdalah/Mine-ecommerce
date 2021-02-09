import React from 'react';
import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import Photo from "../images/home.jpg"
export default function Home() {
    return (
        <>
         <Hero title="megraya store" max="true" img={Photo}>
            <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
            our products
            </Link>
         </Hero>
        </>
    )
}
