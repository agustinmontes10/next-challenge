import { PokemonCard} from "@/models/globalModels";
import { getPokemon } from "@/redux/base/actions/pokemon";
import { ArrowSquareIn, Robot } from "@phosphor-icons/react";
import Link from "next/link";
import { connect } from "react-redux";


export type CardProps = {
    pokemon: PokemonCard,
    getPokemon: Function
};

const mapStateToProps = () => {
    return {
      
    }
  }
const mapDispatchToProps = {
    getPokemon
}

const Card = ( {pokemon, getPokemon} : CardProps ) => {

    const handleClick = () => {
        getPokemon(pokemon.url)
    };

    return (
            <div className="col-9 col-md-2 m-4 pokemonItem animate__animated animate__fadeIn animate__slow">
                <div className="d-flex">
                    <img src="/iconPokeball.png" className="me-2" alt="" style={{ width: '36px' }}/>
                    <h4 className="">{ pokemon.name }</h4>
                </div>
                
                <Link href={`/pokemons/${pokemon.name}`} className="d-flex align-items-center" onClick={ handleClick }>
                    <ArrowSquareIn size={24} color="gray" weight="bold" className="me-2" />
                    <h6>Ver detalles</h6>
                </Link>
            </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)