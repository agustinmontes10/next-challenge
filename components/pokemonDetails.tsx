import React from "react";
import { Ability, Pokemon, PokemonReducerPropsType } from "@/models/globalModels";
import { Lightning, Star } from "@phosphor-icons/react";

export type PokemonDetailsPropsTypes = {
    pokemon: Pokemon,
} 

const PokemonDetails = ({ pokemon }: PokemonDetailsPropsTypes) => {

    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

    return (
        <div className="pokemonDetails animate__animated animate__fadeIn animate__slow">

            <img src={imageURL} alt="" />
            
            <h2 className="text-break" style={{maxWidth: '100%'}}>{pokemon.name}</h2>
            
            <div className="d-flex flex-column w-100 mt-4 mb-4">
                <h4>Habilidades</h4>
                <div className="d-flex flex-wrap">

                    {pokemon.abilities.map((ability: Ability) => (
                        <div className="d-flex skill m-3" key={ability.ability.name}>
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
