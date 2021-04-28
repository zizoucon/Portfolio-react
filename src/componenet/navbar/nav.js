import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import 'data'
import './nav.css'
const  Nav =({fullName,profession,HOME,RESUME,PROJECTS,CONTACT})=>{



//  const handleAlert= (e)=>{
//   return handelName(fullName);
// }


        return ( 
              <nav className="container">
                   <div className="a">
                       <h1>{fullName}</h1>
                       <h3> {profession}</h3>
                   </div>
              
                   <div className="b">   
            
                       <ul>
                          <li><a className="active" href="#home" >{HOME}</a></li>
                          <li><a href="#RESUME">{RESUME}</a></li>
                          <li><a href="#PROJECTS">{PROJECTS}</a></li>
                          <li style={{float:"right"}}><a href="#CONTACT">{CONTACT}</a></li>
                      </ul>
                    </div>  
            </nav>
            

            
         );
    }
   
export default Nav;