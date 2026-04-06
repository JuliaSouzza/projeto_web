import { useState } from "react";
import "./FormularioAluno.css";

function FormularioAluno() {

    const [aluno, setAluno] = useState({
        name: "",
        surname: "",
        idade: 0,
        universidade: "",
        curso: "",
        areas_interesse: { mat: false, deg: false, des: false }
    });

    const onHandleInput = (event) => {
        const { name, value } = event.target;

        setAluno({
            ...aluno,
            [name]: name === "idade" ? Number(value) : value
        });
    };

    const onHandleCheckbox = (event) => {
        const { name, checked } = event.target;

        setAluno({
            ...aluno,
            areas_interesse: {
                ...aluno.areas_interesse,
                [name]: checked
            }
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const interessesSelecionados = Object.keys(aluno.areas_interesse)
            .filter((key) => aluno.areas_interesse[key])
            .join(", ");

        alert(
            `Submetido!
Nome: ${aluno.name} ${aluno.surname}
Idade: ${aluno.idade}
Universidade: ${aluno.universidade}
Curso: ${aluno.curso}
Interesses: ${interessesSelecionados || "Nenhum"}`
        );
    };

    return (
        <div className="container">
            <h1 className="title">Formulário - Aluno</h1>

            <div className="preview">
                {JSON.stringify(aluno)}
            </div>

            <form className="form" onSubmit={onSubmit}>

                {/* Nome */}
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={aluno.name}
                        placeholder="Insira seu nome"
                        onChange={onHandleInput}
                        className="input"
                    />
                </div>

                {/* Sobrenome */}
                <div className="form-group">
                    <label htmlFor="surname">Sobrenome:</label>
                    <input
                        id="surname"
                        type="text"
                        name="surname"
                        value={aluno.surname}
                        placeholder="Insira seu sobrenome"
                        onChange={onHandleInput}
                        className="input"
                    />
                </div>

                {/* Idade */}
                <div className="form-group">
                    <label htmlFor="idade">Idade:</label>
                    <input
                        id="idade"
                        type="number"
                        name="idade"
                        value={aluno.idade}
                        onChange={onHandleInput}
                        className="input"
                    />
                </div>

                {/* Universidade */}
                <div className="form-group">
                    <label htmlFor="universidade">Universidade:</label>
                    <select
                        name="universidade"
                        id="universidade"
                        value={aluno.universidade}
                        onChange={onHandleInput}
                        className="select-input"
                    >
                        <option value="">Selecione</option>
                        <option value="ufc">UFC</option>
                        <option value="ifce">IFCE</option>
                        <option value="uece">UECE</option>
                    </select>
                </div>

                {/* Curso (Radio) */}
                <div className="form-group">
                    <label>Curso:</label>

                    <label>
                        <input
                            type="radio"
                            name="curso"
                            value="dd"
                            checked={aluno.curso === "dd"}
                            onChange={onHandleInput}
                        />
                        Design Digital
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="curso"
                            value="cc"
                            checked={aluno.curso === "cc"}
                            onChange={onHandleInput}
                        />
                        Ciência da Computação
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="curso"
                            value="es"
                            checked={aluno.curso === "es"}
                            onChange={onHandleInput}
                        />
                        Engenharia de Software
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="curso"
                            value="ec"
                            checked={aluno.curso === "ec"}
                            onChange={onHandleInput}
                        />
                        Engenharia da Computação
                    </label>
                </div>

                {/* Áreas de Interesse (Checkbox) */}
                <div className="form-group">
                    <label>Áreas de Interesse:</label>

                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="mat"
                                checked={aluno.areas_interesse.mat}
                                onChange={onHandleCheckbox}
                            />
                            Matemática
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="deg"
                                checked={aluno.areas_interesse.deg}
                                onChange={onHandleCheckbox}
                            />
                            Design
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="des"
                                checked={aluno.areas_interesse.des}
                                onChange={onHandleCheckbox}
                            />
                            Desenvolvimento
                        </label>
                    </div>
                </div>

                {/* Botão */}
                <div className="form-group">
                    <button className="button" type="submit">
                        Enviar
                    </button>
                </div>

            </form>
        </div>
    );
}

export default FormularioAluno;