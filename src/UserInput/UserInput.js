import React from 'react' ;


const userInput =(props)=>{

   return <input type='text' onChange={props.changename} value={props.displayname}/>;
};
 

export default userInput;