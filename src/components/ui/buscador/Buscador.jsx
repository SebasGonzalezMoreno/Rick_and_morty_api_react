import React from 'react';


export function Buscador(props) {


    return (
        <div className='main'>
            <input onChange={props.filtrar} id='nameTxt' className='input' type="text" placeholder='Busque el nombre' />
            <div id='contenedor' className='cotenedor-cards'>
                {
                    props.characters.map((item, index) => (

                        
                            <div key={index} className='card'>
                                
                               
                                
                                
                                
                                
                                <img className='img' src={item.image} alt="" />
                                <h2 className='name'>{item.name}</h2>
                                <p className='status'>{item.status}</p>
                                <p className='species'>{item.species}</p>
                                




                                
                            </div> 
                    ))
                }

            </div>
        </div>
    );

}



