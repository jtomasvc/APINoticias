import React from 'react'
import styles from './Formulario.module.css';
import UseSelect from '../Hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    //Opciones del select
    const Opciones = [
        {value: 'general' ,label: 'General'},
        {value: 'business' ,label: 'Negocios'},
        {value: 'entertainment' ,label: 'Entretenimiento'},
        {value: 'health' ,label: 'Salud'},
        {value: 'science' ,label: 'Ciencia'},
        {value: 'sports' ,label: 'Deportes'},
        {value: 'technology' ,label: 'Tecnologia'},
    ]

    //utlizar custom hooks
      const [categoria, SelectNoticias] = UseSelect('general', Opciones);

    //Submit al form,pasar categoria a app.js 
    const buscarNoticias = e =>{
        e.preventDefault();

        guardarCategoria(categoria)
    }
    return ( 
        <div className={`${styles.buscador}row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                    <SelectNoticias/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;