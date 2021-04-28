import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import  'data'
import './main.css'

const  Main =({photoprofil,about})=>{

  const im={
    width: "150PX",
    // float: "left",
    borderRadius: "50%",
  };

//  const handleAlert= (e)=>{
//   return handelName(fullName);
// }


        return ( 
              
            
            <main className="container">
                <div className="a"><img src={photoprofil} alt='' style={im}></img></div>
                <div className="b">
              <h1>Hello, </h1>
              <h3>  about me  </h3>
              <button className="c1">My RESUME</button>
              <button className="c2">My WORKS</button>
              <button className="c3">My SKILLS</button>
              <p>{about}</p>
                   </div>
            </main>

        
            
            
            

            
         );
    }

 
export default Main;