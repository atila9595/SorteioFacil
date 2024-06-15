import {React, useState } from "react";

export default function HookIncrement(props) {

    const [num, setNum] = useState(0);

    function diminuir() {
        setNum(num => num - props.parm);
    }
    function aumenta() {
        setNum(num => num + props.parm);
    }

    return(
        <>
        
        <h2>valor: {num}</h2>
        <button onClick={aumenta}>Aumentar</button>
        <button onClick={diminuir}>Diminui</button>
        
        </>
    )
}