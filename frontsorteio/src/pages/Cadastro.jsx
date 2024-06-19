import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Contexto } from "../components/Cards";
/*
{
    "nome": "Jenifer",
    "telefone": "654984955",
    "nome_vendedor": "Gabriel",
    "sorteios": [30, 31, 33, 42, 55]
  }
*/
export default function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { selectedCards } = useContext(Contexto);


    const onSubmit = (data) => {
        data.sorteios = []
        //data.sorteios = selectedCards;
        selectedCards.map((num)=> data.sorteios.push(num))
        fetch('http://localhost:5000/addvendas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => console.log(res))
        .catch(errors => console.log(errors))


        console.log(data)
        selectedCards.map((num)=> console.log(num))
    }

    return (
        <>
            <div className="app-container">
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        className={errors?.name && "input-error"}
                        type="text"
                        placeholder="Nome do comprador"
                        {...register("nome", { required: true })}
                    />
                    {errors?.nome?.type === 'required' && <p className="text-danger">digite o nome do comprador</p>}
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input
                        className={errors?.telefone && "input-error"}
                        type="number"
                        placeholder="Nome do comprador"
                        {...register("telefone", { required: true, maxLength: 11 })}
                    />
                    {errors?.telefone?.type === 'required' && <p className="text-danger">digite o telefone do comprador</p>}
                    {errors?.telefone?.type === 'maxLength' && <p className="text-danger">não pode ter mais de 11 caracter.</p>}
                </div>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Nome do vendedor"
                        {...register("nome_vendedor", { required: true })}
                    />
                    {errors?.nome_vendedor?.type === 'required' && <p className="text-danger">digite o nome do vendedor</p>}
                </div>

                <div className="col mt-2 mb-2">
                    {selectedCards.map(num => (

                        <div key={num} className="badge bg-primary text-wrap" style={{ width: '3rem' }}>
                            {num}
                        </div>

                    ))}
                </div>

                <div className="form-group">
                    <button onClick={() => handleSubmit(onSubmit)()}>Salva</button>
                </div>
            </div>


        </>
    )
}