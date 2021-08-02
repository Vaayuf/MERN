import React from 'react';
import {Switch, Route, useParams} from 'react-router-dom';
import Card from './Card';
import SData from './SData';


const Service = () =>{
    return(
        <>
        
        <div class="cards-1 section-gray">
            <div class="container">
                <div class="row">
                    {
                        SData.map((val, ind)=>{
                            return <Card 
                            title = {val.title}
                            link = {val.link}
                            description = {val.description}
                            caption = {val.caption}
                            />

                        })
                    }            
        
                </div>
            </div>
        </div>

        </>
    );
}

export default Service;