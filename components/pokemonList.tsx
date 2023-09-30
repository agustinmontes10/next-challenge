import React, { useState } from "react";
import Card from "./card";
import { PokemonCard } from "@/models/globalModels";

type PokemonListProps = {
    pokemons: [];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const indexOfLastPokemon = currentPage * itemsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const totalPages = Math.ceil(pokemons.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };


    return (
        <div className="d-flex flex-column justify-content-between h-100">

            <div className="row justify-content-center pokemonList">
                {currentPokemons.map((pokemon: PokemonCard) => (
                    <Card pokemon={pokemon} />
                ))}
            </div>
            
            <nav aria-label="Page navigation" className="d-flex justify-content-center animate__animated animate__fadeIn">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                        Previous
                    </button>
                    </li>

                    {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => (
                    <li className={`page-item ${index + 1 === currentPage ? "active" : ""}`} key={index + 1}>
                        <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                        </button>
                    </li>
                    ))}

                    {totalPages > 5 && (
                    <li className="page-item disabled">
                        <span className="page-link">...</span>
                    </li>
                    )}

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => handlePageChange(totalPages)}>
                        {totalPages}
                    </button>
                    </li>

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                        Next
                    </button>
                    </li>
                </ul>
            </nav>


        </div>
    );
};

export default PokemonList;
