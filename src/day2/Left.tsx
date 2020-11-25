import React from 'react';

const Left = (props:{
    setNimi: React.Dispatch<React.SetStateAction<string>>
}) => {
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setNimi(event.currentTarget.value);
    };
return (
        <>
<input onChange={handleChange}/> 
    
            </>
    );
}
export default Left;
