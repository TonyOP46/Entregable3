import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RicksList from './RicksList';
import '../App.css'

const Ricks = () => {

    const [ricks, setRicks]=useState({})
    const [input, setInput]=useState("")

    useEffect(()=>{
        const ramdonId = Math.floor(Math.random()*127)+1
        axios.get(`https://rickandmortyapi.com/api/location/${ramdonId}`)
        .then(res=>setRicks(res.data))
    },[])

    console.log(ricks)

    const Search=()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${input}`)
        .then(res=>setRicks(res.data))
    }
    return (
        <div className='header'>
            <header className='header-input'>
                <div className='header-main'>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="ingrese un numero"/>
                    <button onClick={Search}>Search</button>   
                </div> 
            </header> 
            <div className='Name'>
                <h1>Rick And Morty</h1>
            </div>
            <div className='info'>
                <div className='info-name'>
                    <h1>{ricks.name}</h1> 
                </div>
                <div className='info-list'>
                    <div>
                        <p>Type: <br />{ricks.type}</p>
                    </div>
                    <div>
                        <p>Dimension: <br />{ricks.dimension}</p>
                    </div>
                    <div>
                        <p>Number of residents: <br />{ricks.residents?.length}</p>
                    </div>
                </div>
            </div>
            <h1>Residents</h1>
            <div className='residents'>
            {
                ricks.residents?.map(rick=>(
                    <RicksList url={rick} key={rick}/>
                ))
            } 
            </div>    
        </div>
    );
};

export default Ricks;