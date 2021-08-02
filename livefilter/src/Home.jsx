import React from 'react';
import {Switch, Route} from 'react-router-dom';


const Home = () =>{
    return(
        <>
            <div className='row container-fluid col col-10 mx-auto '>
                <div className='col col-5 mx-auto d-flex justify-content-center flex-column '>
                    <h1 className="name">Hi, Grow your business with <strong className="name" style={{color:'#2393A3'}}>theCPlusPlus</strong>.</h1>
                    <h6 className="pt-3" style={{color:'#989A9A'}}>We are team of talented developers making websites.</h6>
                </div>

                <div className='col col-5 mx-auto my-auto '>
                    <img src="https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif" alt="Ohh!!no"/>
                </div>
            </div>
        </>
    );
}

export default Home;