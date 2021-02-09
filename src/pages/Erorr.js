import React from 'react'
import photo404 from "../images/notfound.jpg";
import {Link} from "react-router-dom";
import styled from "styled-components";
export default function Erorr() {
    return (
        <>
           <ErrorSec>
            <div className="container">
                 <div className="row">
                   
                 <div className="col-lg-6 img-parent m-auto">
                        <img src={photo404} alt="اتفضل حضرتك" className="notfound"/>
                        <Link to="/" className="home-link main-link" style={{ margin: "2rem" }}>
                            Home
                        </Link>    
                    </div> 
                 </div>
            </div>
           </ErrorSec>
       </>
    )
}

const ErrorSec = styled.section`
     background-color:#efefef;
     height:100vh;
     .img-parent{
         width:100%;
         overflow:hidden;
         img{
             width:100%;
             height:100%;
         }
     }
`