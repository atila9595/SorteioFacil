
import { useState, createContext } from "react";
import Button from "./Button";

export const Contexto = createContext();

export function Cards({ compradores }) {
    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardClick = (cardId, status) => {
        //Verifica se já foi vendido
        if (status === '1') {
            alert("numero já vendido!")
        } else {
            // Verifica se o card já está selecionado
            if (selectedCards.includes(cardId)) {
                setSelectedCards(selectedCards.filter((id) => id !== cardId));
            } else {
                setSelectedCards([...selectedCards, cardId]);
            }
        }

    };

    const isCardSelected = (cardId) => selectedCards.includes(cardId);

    //console.log(compradores)
    return (
        <Contexto.Provider value={{ selectedCards}}>
            <div className="row " >
                {selectedCards.length > 0 &&
                    <>
                        <div className="col-8">
                            {selectedCards.map(num => (

                                <div key={num} className="badge bg-primary text-wrap" style={{ width: '3rem' }}>
                                    {num}
                                </div>

                            ))}
                        </div>
                        <div className="col-4 order-last">
                            <Button validador='alt' />
                        </div>
                    </>
                }
            </div>
            <div className="row mt-2">
                {compradores.map(comprador =>

                    <div
                        key={parseInt(comprador[0])}
                        className={`heigth-30 card ${isCardSelected(parseInt(comprador[0])) ? 'selected bg-danger' : ''} 
                        ${comprador[5] === '1' ? 'bg-info' : ''} col-4 col-md-3  `}

                        onClick={() => handleCardClick(parseInt(comprador[0]), comprador[5])}
                    >
                        Card {comprador[0]}
                    </div>

                )}
            </div>
        </Contexto.Provider>
    )

}