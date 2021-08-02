import React from 'react';

const ToDoLists = (props) => {


    return (
        <>
            <div className="todo">

                <li>
                    <button className="btn"
                        onClick={() => {
                            props.onSelect(props.id);
                        }
                        } style={{marginRight:"10px"}} > x </button>
                    {props.text} </li>
            </div>
        </>
    );
};

export default ToDoLists;
