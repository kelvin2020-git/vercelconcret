import React, {useState} from "react";

export default function Contactos () {
  const [status, setStatus] = useState("Enviar");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando");
    const { name, email, message,apellido,telefono } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      apellido: apellido.value,
      telefono: telefono.value,
    };
    let response = await fetch("/api/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify(details),
    });
    setStatus(status);
    e.target.reset()
    let result = await response.json();
    alert(result.status);
 

  };



  return (
    <>

<section id="contacto" className="contacto-contenedor">
          <h3 className="contacto-titulo">CONTACTO</h3>
          <div className="contacto-p"></div>
          <div className="contacto-contenedor-mapa"></div>
  <div className="contacto-grid">
 
  <div className="contacto-grid-contenedor">
 
  <div className="contacto-grid-titulo">
 
  Preguntas
    
  </div>
   
  <div className="contacto-grid-contenido">
 
  Para cotizaciones  preguntas, comentarios e inquietudes; por favor llámanos: 914-135-288 o completa el formulario a continuación
  </div>
    <form className="formulario" onSubmit={handleSubmit}>
      <div  className="input">
        <label htmlFor="name" id="labeltext">
Nombre
        </label>
        <input type="text" id="name" required></input>
      </div>

      <div className="input" >
        <label>
Apellido
        </label>
        <input type="text" id="apellido" required></input>
      </div>
      <div className="input" >
        <label>
Email*
        </label>
        <input type="email" id="email" required    pattern="^.+@.+\.[a-zA-Z]{2,63}$" ></input>
      </div>
      <div className="input" >
        <label>
        Teléfono
        </label>
        <input type="text" id="telefono" required></input>
      </div>
      <div>
          <label htmlFor="message" id="labeltext">Déjanos un mensaje ...</label>
          <textarea id="message" required  style={{height: "120px", width:"420px"}} />
        </div>
      <button type="submit" className="formulario-button">{status}</button>
    </form>
  </div>
  <div className="contacto-grid-contenedor">
 
  <div className="contacto-grid-titulo-contenido">Oficina Principal</div>
  <div className="contacto-contenido">
    <div>Miami, Florida</div>
    <div>strongconcrete.info@gmail.com</div>
    <div>Teléfono: +1 (786) 531-5356</div>
  </div>
  <div className="contacto-numero">
    <div>Recibe un presupuesto:</div>
    <div>+1 (786) 531-5356</div>
    
  </div>
  <div className="contacto-pp"></div>
  </div>
   
 </div>
 </section>
    </>
  
  )}