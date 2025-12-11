import './App.css'


import React, { useState } from "react";

function Boton({correo, pass}) {
  const [mostrar, setMostrar] = useState(false);

  function mensaje() {
    if(correo.trim()!== '' && pass.trim()!== ''){
        setMostrar(true); // cambia el estado a true
    } else{
        alert('Por favor ingrese correo y contraseña correctamente')
    }
    
  }

  return (
    <div>
      <button className='boton' type="button" onClick={mensaje}>
        Ingresar
      </button>
    
      {mostrar && <h1>¡Bienvenido!</h1>}
    </div>
  );
}


export default function miApp(){
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');

    return(
        <div>
            <h1>Bienvenido</h1>
            <h1>Ingresa tu cuenta</h1>
            <div className='contenedor'>
                <p>Ingresar correo electrónico</p>
                <input id='correo' value={correo} type="email" placeholder='Correo Electrónico' onChange={(e) => setCorreo(e.target.value)} required />
                <p>Ingresar contraseña</p>
                <input id='pass' value={pass} type="password" placeholder='Contraseña' onChange={(e) => setPass(e.target.value)} required/>

            </div>
            <Boton correo={correo} pass={pass}/>
        </div>
    );
}


