import React from "react";

const Filme = ({ filme }) => {
    const mostrarNome = ()=>{
        alert(filme.nome);
    }
    return (
        <tr>
            <th scope="row">1</th>
            <td>{filme.nome}</td>
            <td>{filme.categoria}</td>
            <td>{filme.ano}</td>
            <td className="text-right">
                <button className="btn btn-info" onClick={mostrarNome}>Informações</button>{'  '}
                <button className="btn btn-danger">Excluir</button>
            </td>
        </tr>
    );
};

export default Filme;