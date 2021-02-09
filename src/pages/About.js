import React from 'react';
import styled from "styled-components";
export default function About() {
    return (
        <AboutSection>
            <div className="container">
               <div className="row">
               <div className="col-sm-6 m-auto">
               <h1>about</h1>
               <p> 
               Techstore.co.in is a young startup and the brainchild of a team of Techies from Karnataka. Our parent company Techstore is a decade long leader in IT retail from Karnataka.  Our mantra is "Technology for the masses" which we can achieve by making delivery of IT Products at an affordable price within 48 Hours anywhere in India supported by a strong logistics backbone. We design, build and customize products and services to satisfy a range of customer requirements. From corporate, government and professional service needs of educational institutes and industries, to those of consumers at home, we do business directly with customers, one at a time, and believe we do it better than anyone who has to offer.   </p>
               </div>
              
               </div>
            </div>
        </AboutSection>
    )
}

const AboutSection = styled.section`
   background:#eee;
   height:100vh;
   position:absolute;
   top:0;
   left:0;
   width:100vw;
   margin-top:0;
   padding-top:100px;
   p{
       /* text-align:center; */
   }
` 