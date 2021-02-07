import React, { Component } from 'react';

const char =(props)=>{

    const style={
        textAlign:"center",
        color:"green",
        display: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "1px solid blue",
    }
    return(
        <div style={style}> 
        
        {props.character}
        
        </div>
    );
}
export default char;