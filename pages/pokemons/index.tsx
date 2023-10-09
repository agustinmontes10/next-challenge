import { PokemonsReducerPropsType, ServerStatus } from "@/models/globalModels";
import { RootState } from "@/redux/rootReducer";
import { connect } from "react-redux";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Layout from "../../components/layout";
import PokemonList from "../../components/pokemonList";
import Error from "@/components/error";
import Loading from "@/components/loading";
import { useEffect } from "react";
import { getPokemons } from "@/redux/base/actions/pokemons";

const mapStateToProps = (state: RootState) => {
    return {
        pokemonsState: state.pokemons
    }
}

const mapDispatchToProps = {
    getPokemons,
}

export type PokemonsPropTypes = {
    pokemonsState: PokemonsReducerPropsType,
    getPokemons: Function,
} 
  
const PokemonsPage = ({pokemonsState, getPokemons}: PokemonsPropTypes) => {

    useEffect(() => {
        console.log('useEffect')
        getPokemons();
    }, [])
    

    const { status, pokemons } = pokemonsState;

    return (
        <Layout>
                <Link href='/' className="back">
                    <ArrowCircleLeft size={52} color="#0e152b" weight="fill" />
                </Link>        

                {
                    status === ServerStatus.error ? (
                        <Error />
                    ) : status === ServerStatus.fetching ? (
                        <Loading />
                    ) : (
                        <PokemonList pokemons={pokemons} />
                    )
                }
        </Layout>
    );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsPage)

/*



 */