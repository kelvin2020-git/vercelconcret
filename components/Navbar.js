

import React from 'react';
import Image from 'next/image';
import Link from "next/Link";
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


            
        <Link href="#nosotros"passHref><a className= "navbar3">NOSOTROS</a></Link>
   
         
          
            <Link href="#proyecto"passHref><a className= "navbar3">PROYECTOS</a></Link>
            <Link href="#contacto"passHref><a className= "navbar3">CONTACTOS</a></Link>                     
       
      
              


    </nav>
              

            </div>


        </div>

    );
}