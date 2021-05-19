import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  
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
                   <Router>
                       <ul>
                          <li><NavLink to="/"className="active"  >{HOME}</NavLink></li>
                          <li><NavLink to="/resume">{RESUME}</NavLink></li>
                          <li><NavLink to="/project">{PROJECTS}</NavLink></li>
                          <li style={{float:"right"}}>
                              <NavLink to="/contact">{CONTACT}</NavLink></li>
                      </ul>
                     </Router>
                    </div>  
            </nav>
            

            
         );
    }
   
export default Nav;