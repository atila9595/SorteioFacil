import { useEffect, useState } from "react";

export default function Data () {

    const [compadores, setCompradores] = useState([]);
    useEffect(() => {
        fetch('http://192.168.0.17:5000/getrows', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(dados => setCompradores(dados))
            .catch(error => console.error('Error:', error));
    },[]);
    console.log(compadores)
    return (
        <>
            {compadores.map(comprador => <p key={parseInt(comprador[0])} >Numero: {comprador[0]}Nome: {comprador[1]} Numero: {comprador[2]} Data: {comprador[4]} Pago: {comprador[6]}</p>)}
        </>
    )
}