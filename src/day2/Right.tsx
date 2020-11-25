import React, {useState} from 'react';

const Right = (props:{
    nimi:string | undefined
}) => {


    return (
        <>
        <p>Hello, {props.nimi}</p>
    </>
    );
}

export default Right;