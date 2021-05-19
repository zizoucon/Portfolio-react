import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import DATA, { data } from '../data'
  import FOOTER from '../componenet/footer/footer'
  import Nav from '../componenet/navbar/nav'
  
  import MAIN from '../componenet/main/main'




function Home ()  {
      
     
          return ( 

<div>

<Nav 
            fullName= {data.fullName}
             profession={data.profession} 
             HOME={data.HOME}
            RESUME={data.RESUME} 
            PROJECTS={data.PROJECTS} 
            CONTACT={data.CONTACT}/>

      <MAIN photoprofil={data.photoprofil} about={data.about}></MAIN>
      <FOOTER Call={data.Call} imgcall={data.imgcall}Email= {data.Email}
      imgemail={data.imgemail}
     follow= {data.follow}imgfollow={data.imgfollow}
     go={data.go}imggo={data.imggo}/>


</div>
   
           
           );
      }
  
   
  export default Home;