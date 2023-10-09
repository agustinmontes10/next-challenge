import { useEffect } from "react";
import { PokemonReducerPropsType, ServerStatus } from "@/models/globalModels";
import { RootState } from "@/redux/rootReducer";
import { connect } from "react-redux";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Layout from "@/components/layout";
import Error from "@/components/error";
import Loading from "@/components/loading";
import PokemonDetails from "@/components/pokemonDetails";
import { getPokemon } from "@/redux/base/actions/pokemon";
import { useRouter } from "next/router";

const mapStateToProps = (state: RootState) => {
    return {
        pokemonState: state.pokemon
    }
}

const mapDispatchToProps = {
    getPokemon,
}

export type PokemonPagePropTypes = {
    pokemonState: PokemonReducerPropsType,
    getPokemon: Function,
} 
  
const PokemonPage = ({pokemonState, getPokemon}: PokemonPagePropTypes) => {

    const router = useRouter();
    const currentPath = router.asPath;
    const parts = currentPath.split('/');
    const pokemonId = parts[parts.length - 1];

    useEffect(() => {
        console.log( 'pokemonID: ', pokemonId );
        getPokemon(pokemonId)
    }, [currentPath])
    

    const { status, pokemon } = pokemonState;

    return (
        <Layout>
            <div className="container">
                <Link href='/pokemons' className="back">
                    <ArrowCircleLeft size={52} color="#0e152b" weight="fill" />
                </Link>

                {
                    status === ServerStatus.error ? (
                        <Error />
                    ) : status === ServerStatus.fetching ? (
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
