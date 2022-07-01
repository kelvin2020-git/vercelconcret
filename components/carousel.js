import React, { useEffect, useState } from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import Image from 'next/image';

// import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
// import {db} from './firebase'
// // import { db, getDocs, doc, collection } from "../components/firebase/firebase-config";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];
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
  {id:23,contenido:'Construcción', url:"/../public/5.webp"},
  {id:24,contenido:'Acabados',url:"/../public/24.webp"},
  {id:25,contenido:'Piso falso',url:"/../public/25.webp"},

]



export default function Caruseles() {
  // const [tasks, setTasks] = useState([])
  // useEffect(() => {
  //   const q = query(collection(db, 'customersData'))
  //   onSnapshot(q, (querySnapshot) => {
  //     setTasks(querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       data: doc.data()
  //     })))
  //   })
  // },[])
  


    // const [refe, getrefe] = useState([]);

    // const setrefe = async () => {
    //   try {
    //     const placesSnap = await getDocs(
    //       collection(db, `proyecto`)
    //     );
    //     const places = [];
  
    //     placesSnap.forEach((doc) => {
    //       places.push({
    //         ...doc.data(),
    //         id: doc.id,
    //       });
    //     });
        
    //    getrefe(places)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  
    // useEffect(() => {
    //   setrefe();
    // });
    return (
        <div className="appp">
        <div className="controls-wrapper">
        
        </div>
        <hr className="seperator" />
        <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}
       enableAutoPlay autoPlaySpeed={2500}
     
          
        >
            {posts.map(post => (
 <div key={post.id}   >
    
      <div>
      
      <Item key={post}>    <Image
 
 src={post?.url}
 width="500px"
 height="600px"
 alt={post?.contenido}
/></Item>
      </div>
      {/* <div className="titulo-card-carousel">{post.contenido} </div> */}
       </div>
     ))}

        </Carousel>
        </div>
      </div>

    );

}







