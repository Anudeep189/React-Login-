import React,{useState} from 'react';
function Button(prop)
{
    const [title,setTitle]=useState("Submit to update");
    return(
    <button onClick={()=>setTitle('updated')}>{title}</button>
    )
}
export default Button;


