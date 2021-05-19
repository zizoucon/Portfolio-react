import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import DATA from 'data'
import './footer.css'

const  Footer =({Call,imgcall,Email,imgemail,follow,imgfollow,go,imggo})=>{



//  const handleAlert= (e)=>{
//   return handelName(fullName);
// }


        return ( 
              
            
            
            
          
            
            
            <div className="footer">
              <div> 
               <div> <img src={imgcall} alt='' ></img></div>
               <div><h4>call</h4> </div>
               <div> {Call} </div>
                 </div>
              <div><img src={imgemail}alt='' ></img> <h6>Email</h6>{Email}</div>
              <div> <img src={imgfollow}alt='' ></img><h6>Follow me</h6> {follow}</div>
              <div> <img src={imggo}alt='' ></img><h6>Follow me</h6> {go} </div>
            </div>
            
           
            
            

            
         );
    }
   


 
 
export default Footer;