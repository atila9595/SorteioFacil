import { useState } from "react";
import AltVenda from "./AltVenda";
import Cadastro from "../pages/Cadastro";


export default function Button(validador) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen((modalIsOpen) === true ? false : true);

    };

    return (
        <>
            {validador.validador === 'canc' ? (
                <button type="button" className="btn btn-outline-success" onClick={openModal}>
                    Cancelar
                </button>
            ) : validador.validador === 'alt' ? (
                <>
                    <button type="button" className="btn btn-outline-success" onClick={openModal}>
                        Adicionar Venda
                    </button>
                    <AltVenda isOpen={modalIsOpen} openModal ={openModal} >
                        <Cadastro openModal={openModal} />
                    </AltVenda>
                </>
            ) : null}
        </>
    )
}