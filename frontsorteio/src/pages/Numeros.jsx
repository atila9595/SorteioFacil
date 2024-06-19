import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";

export default function Numeros() {
    const [compradores, setCompradores] = useState([]);
    useEffect(() => {
        fetch('http://192.168.0.17:5000/getrows', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(dados => setCompradores(dados))
            .catch(error => console.error('Error:', error));
    }, []);

    

    

    return (
        <>
            <h1>Numeros do Sorteio</h1>
            <Cards compradores={compradores} />
        </>
    )
}

