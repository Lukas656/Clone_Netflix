import React from "react";
import Filme from '../../components/Filme/index'

const Home = () => {
    // Lógica do Componente
    const listaFilmes = [
        {nome: 'Filme 1', ano: '2020', categoria:'Infantil'},
        {nome: 'Filme 2', ano: '2018', categoria:'Comédia'},
        {nome: 'Filme 3', ano: '2002', categoria:'Romance'},
        {nome: 'Filme 4', ano: '2012', categoria:'Drama'},
        {nome: 'Filme 5', ano: '2023', categoria:'Ação'},
    ];
    //Retornar o HTML do componente 
    return (
        <div className="container">
            <br/>
            <h1>Lista Filmes</h1>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>{listaFilmes.map(filme => (
                <Filme filme={filme}/>

                ))}</tbody>
                </table>
        </div>
    )
};

export default Home;
