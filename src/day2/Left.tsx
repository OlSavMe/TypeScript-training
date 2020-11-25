import React from 'react';

const Left = (props:{
    setNimi:string
}) => {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNimi(event.currentTarget.value);
    };
return (
        <>
<input onChange={handleChange}/> 
    
            </>
    );
}
export default Left;
