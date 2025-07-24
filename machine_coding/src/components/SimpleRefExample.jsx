import React,{useState, useEffect, useRef} from 'react';

export const SimpleRefExample=()=>{
    const [inputVal, setInputVal] = useState('');
    let inputRef = useRef(null);

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    })
    return(
        <div>
            <h1>Simple Ref Example:</h1>
            <input value={inputVal} ref={inputRef} onChange={(e)=>setInputVal(e.target.value)}/>
        </div>
    )
}