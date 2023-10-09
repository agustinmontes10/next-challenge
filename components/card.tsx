import { PokemonCard} from "@/models/globalModels";
import { getPokemon } from "@/redux/base/actions/pokemon";
import { ArrowSquareIn } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
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

    const partsURL = pokemon.url.split('/');
    const pokemonId = partsURL[partsURL.length - 2];

    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

    return (
            <div className="col-9 col-md-2 m-4 pokemonItem animate__animated animate__fadeIn animate__slow">
                <img src={imageURL} alt="" />

                <h4 className="text-break" style={{maxWidth: '100%'}}>{ pokemon.name }</h4>
                
                <Link href={`/pokemons/${pokemonId}`} className="d-flex align-items-center" >
                    <ArrowSquareIn size={24} color="gray" weight="bold" className="me-2" />
                    <h6>Ver detalles</h6>
                </Link>
            </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)