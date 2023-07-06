import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import './App.css'

const TextInput = forwardRef((props , ref) => {
    const { hasError, placeholder, update } = props;
    console.log(update);
    const inputRef = useRef();
    
    useImperativeHandle(ref,()=>{
        return{
            focus(){
                inputRef.current.focus();
            },
        };
    });

    return(
        <>
            <input
             type="text"
             ref={inputRef}
             onChange={e=>update(e.target.value)}
             placeholder={placeholder}  
             style={{
                borderColor:hasError?'red':'black',
                outline:'none',
             }}
            />
        </>
    )
});

export default TextInput;
