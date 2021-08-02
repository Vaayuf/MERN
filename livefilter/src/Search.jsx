import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { useState } from 'react';


const Search = () =>{
    const [curr, setCurr] = useState("");
    const [inputval, setInputval] = useState("");
    const inputEvent =(event)=>{
        setCurr(inputval);
        console.log('clicked');
    }
    const handleChange =(event)=>{
        
        setInputval(event.target.value);
        console.log(event.target.value);
        console.log('clicked');
    }
     const link = `https://source.unsplash.com/400x300/?${curr}`;
    
    return(
        <>
        <div className="topsearch mx-auto">
            <h1 className='pt-3'>Search and download all the images you could.</h1>
            <input type="text" className="searchbar"  placeholder="Search" onChange={handleChange} />
            <br/>
            <button type="button" className="btn btn-dark mt-4" onClick = {inputEvent} >Search</button>
            <br/>
            {curr === ""?null:(<><img src={link} class="rounded" alt="Image" mt-4/>
            <div className="mt-3 font-weight-light"><u>{link}</u></div></>)}
            
        </div>
        
        </>
    );
}

export default Search;