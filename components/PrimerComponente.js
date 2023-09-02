import React, {useState} from 'react'

export const PrimerComponente = () => {
  
  // let nombre="Moises";

  const[nombre,setNombre]=useState("Moises");

  let comidasYucatecas=[
    "Poc chuc",
    "Papadzules",
    "Panuchos",
  ]
  const cambiarNombre=(nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <div>
        <h1>PrimerComponente</h1>
        <p>este es el primero</p>
        <p>mi nombre es <strong className={nombre.length>=4? 'Verde' : 'rojo'}>{nombre}</strong></p> {/*se puede llamar a cualquier variable usando las llaves */}
        
        <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='cambia el nombre'></input>

        <button onClick={e => {
          console.log("El valor guardado en tu estado es: ", nombre);
        }}> Mostrar el valor del estado

        </button>

        <button onClick={ e => cambiarNombre("MOISES")}></button>

        <p>soy de Yucatán, mis platillos locales favoritos son: </p>
        <ul>
          {comidasYucatecas.map((comida,indice)=>{
            return (<li key={indice}> 
              {comida}
            </li>)
          })}
        </ul>
        {/* a esta forma de combinar html y javascript se le conoce como lenguaje jsx */}
    </div>
  )
}
