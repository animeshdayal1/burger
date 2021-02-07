import React, { Component } from 'react';


const validation = (props) => {
    const style= {
        display:"inline-block",
        color:"blue",
        backgroundColor: "yellow",
        width:"100px",
        
    };

    let validationMessage="text is long enough";
                if(props.inputLength <=5 ){
                    validationMessage="text is too short";
                }
return(

    <div style={style}>
    <p>{validationMessage}</p>

    </div>
   // <div style={style}>
    //{ props.inputLength < 5 ?
    //<p>too short</p> : 
   // <p>too long</p>
     //}
    //</div>  
    //above comment can also be used for the same function
)
};

export default validation;