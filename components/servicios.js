import React from "react";
import Image from 'next/image';
import mypic from '../public/22.webp'
export default function Servicios () {

 

  



  return (
    <>

<section className="servicios" id="servicios">
          <span>SERVICIOS</span>
          <p className="servicios-p"></p>
          <div className="grid">
  <article>
  <Image
      src={mypic}
      alt="Picture of the author"
      width="300px"
      height="225px"
      
    />
    <div className="text">
      <h3>Planeamiento</h3>
      <p>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti</p>
     
    </div>
  </article>
  <article>
  <Image
      src={mypic}
      alt="Picture of the author"
      width="300px"
      height="225px"

    />
    <div className="text">
      <h3>Maquetas</h3>
      <p>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti</p>
    
    </div>
  </article>
  <article>
  <Image
      src={mypic}
      alt="Picture of the author"
      width="300px"
      height="225px"
    />
    <div className="text">
      <h3>Construcción</h3>
      <p>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti</p>
      
    </div>
  </article>
 
</div>
    </section>
    </>
  
  )}