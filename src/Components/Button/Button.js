import React from 'react';

function Button(props){
    return(
        <div className={props.divclassname}>
        <buttton className={props.className} type={props.type} id={props.id}  >{props.name}</buttton>
        </div>
        )
}

export default Button;