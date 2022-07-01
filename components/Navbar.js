

import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.webp'

export default function Navbar() {

    return (

        <div className="navbar">
          

                <div >

                
                <a   href="#inicio"><Image
 className="logo"
 src={logo}
 alt="logo"
 width="120px"
 height="120px" 
/></a>
                
                 
                  
                </div>
                <div>
                    
                <nav  >
                   
       
      
                 
                  
  



  <li className="navbar3 lista__item--outer">
  <a className="lista--enlace" href="#inicio">INICIOS</a>
    
    <ul className="lista lista--inner">
      <li className="lista__item--inner"> <a className=" lista--enlace" href="#servicios">SERVICIOS</a></li>
      
     
    </ul>        
  </li>


            
      <a className= "navbar3" href="#nosotros" >NOSOTROS</a>
     
         
          
            <a className= "navbar3" href="#proyecto">PROYECTOS</a>
        <a className= "navbar3" href="#contacto">CONTACTOS</a>                     
       
      
              


    </nav>
              

            </div>


        </div>

    );
}