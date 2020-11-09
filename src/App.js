import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Noticias from './Components/Noticias';

function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([])

  useEffect(()=>{
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=4e8bee3e079545fd8e74c1c95cd663f6`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    
    consultarAPI()
  },[categoria])

  return (
      <Fragment>
        <Header
          titulo='buscador de noticias'
        />

        <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          />

          <Noticias
            noticias={noticias}
          />
        </div>
      </Fragment>
  )
}

export default App;
