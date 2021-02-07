import React from 'react' ;



const person = (props) => {
return (
<div>
<p onClick={props.click}> this is in person folder {props.name} with a folder number {props.nmbr}</p>
<input type="text" onChange={props.changed} value={props.name} />


</div>
)
};

export default person ;