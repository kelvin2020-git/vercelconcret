import Image from 'next/image';

import React, { useState} from 'react';
export default function Proyectos () {
  const posts =[{id:1,contenido:'Planeacion', url:"/../public/1.webp"},
  {id:2,contenido:'Construcción',url:"/../public/2.webp"},
  {id:3,contenido:'Piscinas',url:"/../public/3.webp"},
  {id:4,contenido:'Acabados', url:"/../public/4.webp"},
  {id:5,contenido:'Planeacion',url:"/../public/5.webp"},
  {id:6,contenido:'Construccion',url:"/../public/6.webp"},
  {id:7,contenido:'Acabados piscinas', url:"/../public/7.webp"},
  {id:8,contenido:'Maquetas',url:"/../public/8.webp"},
  {id:9,contenido:'Acabados',url:"/../public/9.webp"},
  {id:10,contenido:'Acabados', url:"/../public/10.webp"},
  {id:11,contenido:'Acabados',url:"/../public/11.webp"},
  {id:12,contenido:'Maquetas',url:"/../public/12.webp"},
  {id:13,contenido:'Piso falso', url:"/../public/13.webp"},
  {id:14,contenido:'Construccion',url:"/../public/14.webp"},
  {id:15,contenido:'Acabados',url:"/../public/15.webp"},
  {id:16,contenido:'acabados', url:"/../public/16.webp"},
  {id:17,contenido:'Acabados',url:"/../public/17.webp"},
  {id:18,contenido:'Maquetas',url:"/../public/18.webp"},
  {id:19,contenido:'Maquetas', url:"/../public/19.webp"},
  {id:20,contenido:'Maquetas',url:"/../public/20.webp"},
  {id:21,contenido:'Acabados',url:"/../public/21.webp"},
  {id:23,contenido:'Construcción', url:"/../public/23.webp"},
  {id:24,contenido:'Acabados',url:"/../public/24.webp"},
  {id:25,contenido:'Piso falso',url:"/../public/25.webp"},

]

 
  // Default number of posts dislplayed

  
    const [ postNum, setPostNum] = useState(2); // Default number of posts dislplayed
  
    function handleClick() {
      setPostNum(prevPostNum => prevPostNum + 2) // 3 is the number of posts you want to load per click
    }

  return (
    <>
     <section id="proyecto" className="proyecto-contenedor">
          <h3 className="proyecto-titulo">PROYECTOS</h3>
          <div className="proyecto-p"></div>
  <div className="App">
 
  {posts.slice(0, postNum).map(post => (
 <div key={post.id}  className="box" >
    
      <div className="imagen">
      
      <Image
  alt={post?.contenido}
 src={post?.url}
 width="600px"
 height="640px"
/>
      </div>
      <div className="textj">{post.contenido} </div>
       </div>
     ))}
   <div className="clearfix"><button onClick={handleClick} className="btn-load-more" >Show More</button></div>
   
 </div>
 </section>
 <div className="contactos-p"></div>
    </>
  
  )}



