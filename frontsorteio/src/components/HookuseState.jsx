import { useState } from "react";
import HookIncrement from "./HookIncremente";
import './css/HookuseState.css'

export default function HookuseState() {
    //hook de aumenta
    const [valor, setValor] = useState(0);

    function aumentar() {
        setValor(old => old + 1)
    }

    function diminuirValor(a) {
        setValor(old => old - a)
    }

    //hook de multplicar um valor pelo outro
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function diminuir1() {
        setNum1(num1 => num1 - 1);
    }
    function aumenta1() {
        setNum1(num1 => num1 + 1);
    }
    function diminuir2() {
        setNum2(num2 => num2 - 1);
    }
    function aumenta2() {
        setNum2(num2 => num2 + 1);
    }

    //usa useState em componentes diferente passando valor pela props

    return (
        <>
            <h1>valor: {valor}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={() => diminuirValor(10)}>Aumentar</button>
            <p>----------------------------------------------------------</p>
            <h2>valor 1: {num1}</h2>
            <button onClick={aumenta1}>Aumentar 1</button>
            <button onClick={diminuir1}>Diminui 1</button>

            <hr />

            <h2>valor 2: {num2}</h2>
            <button onClick={aumenta2}>Aumentar 2</button>
            <button onClick={diminuir2}>Diminui 2</button>

            <p>O Resultado de {num1} x {num2} = {num1*num2}</p>



            <hr />
            <h1>Increment</h1>
            <div className="layout">
            <HookIncrement parm = {1}/>
            <HookIncrement parm = {5}/>
            <HookIncrement parm = {10}/>
            </div>

        </>
    )
}