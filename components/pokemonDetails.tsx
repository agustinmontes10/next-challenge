import React from "react";
import { Ability, Pokemon, PokemonReducerPropsType } from "@/models/globalModels";
import { Lightning, Star } from "@phosphor-icons/react";

export type PokemonDetailsPropsTypes = {
    pokemon: Pokemon,
} 

const PokemonDetails = ({ pokemon }: PokemonDetailsPropsTypes) => {

    return (
        <div className="pokemonDetails animate__animated animate__fadeIn animate__slow">

            <div className="d-flex">
                <img src="/iconPokeballAbierto.png" className="me-3" alt="" style={{ width: '48px' }}/>
                <h2>{pokemon.name}</h2>
            </div>
            
            <div className="d-flex flex-column w-100 mt-4 mb-4">
                <h4>Habilidades</h4>
                <div className="d-flex">

                    {pokemon.abilities.map((ability: Ability) => (
                        <div className="d-flex skill m-3">
                            <Lightning size={28} color="#d0b21b" weight="fill" className="me-2" />
                            <h6>{ ability.ability.name }</h6>
                        </div>
                    ))}
                    
                </div>
            </div>
            
            <div className="d-flex flex-column w-100">
                <h4>Expericencia</h4>
                <div className="d-flex m-3 skill">
                    <Star size={28} color="#d0b21b" weight="fill" className="me-2" />
                    <h6>{ pokemon.base_experience }</h6>
                </div>
            </div>

        </div>
    );
};

export default PokemonDetails;
