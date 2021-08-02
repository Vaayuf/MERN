import React from 'react';

const Card = (props) => {
    return (
        <>
                    <div className="col-md-3 mx-auto p-3 ">
                        <div className="card h-100 containercard-blog p-2">
                            <div className="h-100 card-image ">
                                 <img className="img container " src={props.link}/>
                                    {/* <div className="card-caption"> {props.caption} </div> */}
                                
                                <div className="ripple-cont"></div>
                            </div>
                            <div className="table pt-2">
                                <h6 className="category text-info">{props.title}</h6>
                                <p className="card-description">{props.description}</p>
                                <div className="">
                                    <button className="float-right btn-primary rounded">Try Now</button>
                                </div>
                            </div>
                        </div>
                </div>
            
        </>
    );
}

export default Card;