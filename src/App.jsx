import { useState } from "react";

import Perfil from "./assets/components/Perfil/index";
import Formulario from "./assets/components/Perfil/Formulario"
import RepotList from "./assets/components/Perfil/ReposLisr";




function App() {

  const [formularioVisivel, setFormularioVisicel] = useState(true)
  const [nomeUsario, setNomeUsuario] = useState('')
  return (
  <>
  <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}></input>

  {nomeUsario.length > 4 && (
    <>

    <Perfil nomeUsario={nomeUsario} />
    <RepotList nomeUsuario={nomeUsario} />
    </>
  )}

    {/* {formularioVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioVisicel(!formularioVisivel)} type="button">toggle form</button> */}


  </>
  )
}

export default App
