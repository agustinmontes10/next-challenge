import { PokemonReducerPropsType } from "@/models/globalModels";
import { RootState } from "@/redux/rootReducer";
import { connect } from "react-redux";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Layout from "@/components/layout";
import Error from "@/components/error";
import Loading from "@/components/loading";
import PokemonDetails from "@/components/pokemonDetails";

const mapStateToProps = (state: RootState) => {
    return {
        pokemonState: state.pokemon
    }
}

const mapDispatchToProps = {

}

export type PokemonPagePropTypes = {
    pokemonState: PokemonReducerPropsType,
} 
  
const PokemonPage = ({pokemonState}: PokemonPagePropTypes) => {

    const { status, pokemon } = pokemonState;

    return (
        <Layout>
            <div className="container">
                <Link href='/pokemons' className="back">
                    <ArrowCircleLeft size={52} color="#0e152b" weight="fill" />
                </Link>

                {
                    status === 1 ? (
                        <Error />
                    ) : status === 3 ? (
                        <Loading />
                    ) : (
                        <PokemonDetails pokemon={pokemon} />
                    )
                }

                
                
            </div>
        </Layout>
        
    );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
