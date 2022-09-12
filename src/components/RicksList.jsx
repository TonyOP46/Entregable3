import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../App.css'

const RicksList = ({url}) => {

    const [info, setInfo]=useState({})

    useEffect(()=>{
        axios.get(url).then(res=>setInfo(res.data))
    },[])

    console.log(info)
    return (
        <div className='information'>
            {/* nombre, status, imagen, lugar, cantidad */}
            <div className='info-total'>
                
                <img src={info.image} alt="" />
                <h2>Name: {info.name}</h2>
                <p>Status: {info.status}</p>
                <p>Origin: {info.origin?.name}</p>
                <p>episodes: {info.episode?.length}</p>
            </div>
        </div>
    );
};

export default RicksList;