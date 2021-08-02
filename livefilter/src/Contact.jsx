import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';


const Contact = () => {
    const [curr1, setCurr1]= useState();
    const [curr2, setCurr2] = useState();

    const inputEmail = (event) =>{
        setCurr1(event.target.value);
    }

    
    const inputMessage = (event) =>{
        setCurr2(event.target.value);
    }

    const inputEvent = () => {
        return(
            alert(`Your Email is ${curr1} and your message is ${curr2}`)
        )
    }

    return (
        <>
            <div className='row container-fluid'>
                <div className=" col col-4 mx-auto mt-5">
                    <form action="#">
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" 
                            id="email" onChange={inputEmail} value={curr1}/>
                        </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" className="form-control" placeholder="Enter password" id="pwd"/>
                            </div>
                            <div className="form-group">
                                <label>Enter your message:</label>
                                <input type="text" className="form-control" placeholder="Message" 
                                onChange={inputMessage} value={curr2}/>
                            </div>
                                    <button type="submit" className="btn btn-primary"
                                    onClick={inputEvent}>
                                    Submit</button>
                                    </form>
                                </div>
                            </div>
        </>
        
    );
}

export default Contact;