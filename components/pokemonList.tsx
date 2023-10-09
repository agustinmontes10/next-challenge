import React, { useState } from "react";
import Card from "./card";
import { PokemonCard } from "@/models/globalModels";
import Pagination from "./pagination";

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
        <div className="d-flex flex-column justify-content-between h-100" style={{maxWidth: '100%'}}>

            <div className="row justify-content-center pokemonList">
                {currentPokemons.map((pokemon: PokemonCard) => (
                    <Card pokemon={pokemon} />
                ))}
            </div>
            
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

        </div>
    );
};

export default PokemonList;


/*
            <nav aria-label="Page navigation" className="d-flex justify-content-center ">
                <ul className="pagination">

                    <li className={`${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="" onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </button>
                    </li>

                    <li className=''>
                        <button className="" onClick={() => handlePageChange(1)}>
                            Primera
                        </button>
                    </li>

                    {
                        (currentPage > 2) ??
                            <li className=''>
                                <button className="" onClick={() => handlePageChange(currentPage-2)}>
                                    {currentPage-2}
                                </button>
                            </li>
                    }
                    
                    {
                        (currentPage > 1) ??
                            <li className=''>
                                <button className="" onClick={() => handlePageChange(currentPage-1)}>
                                    {currentPage-1}
                                </button>
                            </li>
                    }
                    
                    <li className="page-item disabled">
                        <button className="page-link" onClick={() => handlePageChange(currentPage)}>
                            {currentPage}
                        </button>
                    </li>
                    
                    {
                        (currentPage < totalPages) ??
                            <li className=''>
                                <button className="" onClick={() => handlePageChange(currentPage+1)}>
                                    {currentPage+1}
                                </button>
                            </li>
                    }
                    
                    {
                        ( currentPage < (totalPages - 1) ) ??
                            <li className=''>
                                <button className="" onClick={() => handlePageChange(currentPage+2)}>
                                    {currentPage+2}
                                </button>
                            </li>
                    }

                    <li className=''>
                        <button className="" onClick={() => handlePageChange(totalPages)}>
                            Ultima
                        </button>
                    </li>

                    <li className={`${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="" onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>

*/