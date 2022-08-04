import React, { useEffect, useState } from 'react';
import { Buscador } from '../ui/buscador/Buscador'

function Main(props) {
    const [personaje, setpersonaje] = useState([])
    const [info, setinfo] = useState({})
    const [value, setvalue] = useState('')




    const URL = "https://rickandmortyapi.com/api/character";

    const fetchData = (URL) => {

        fetch(URL)

            .then(response => response.json())
            .then(data => {


                data.results ? setpersonaje(data.results) : console.log("no hay")
                data.results ? setinfo(data.info) : console.log("no hay");


            })
            .catch(error => console.log(error))
    }

    const filtrar = (e) => {

        if (e.target.value === '') {
            return fetchData(URL)
        } else if (e.target.value !== '') {
            setvalue(e.target.value)
            const newURL = URL + '/?name=' + value
            return fetchData(newURL)
        }

    }

    const nextUrl = () => {
        const next = info.next
        return fetchData(next)
    }

    const prevtUrl = () => {
        const next = info.prev
        return fetchData(next)
    }

    useEffect(() => {
        fetchData(URL)
    }, [])


    return (
        <div>
            <div className='text'>
            <p>Buscar tu personaje</p>
            <Buscador  filtrar={filtrar} personajes={personaje} />
            </div>

            <Paginas next={nextUrl} prev={prevtUrl} info={info} />
        </div>

    );
}

export default Main;