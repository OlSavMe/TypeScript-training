import React from 'react';

const Left = (props:{
    setName:string
}) => {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setName(event.currentTarget.value);
    };
return (
        <>
<input onChange={handleChange}/> 
    
            </>
    );
}
export default Left;
