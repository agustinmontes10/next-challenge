import { PokemonsReducerPropsType } from "@/models/globalModels";
import { RootState } from "@/redux/rootReducer";
import { connect } from "react-redux";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Layout from "../../components/layout";
import PokemonList from "../../components/pokemonList";
import Error from "@/components/error";
import Loading from "@/components/loading";

const mapStateToProps = (state: RootState) => {
    return {
        pokemonsState: state.pokemons
    }
}

const mapDispatchToProps = {

}

export type PokemonsPropTypes = {
    pokemonsState: PokemonsReducerPropsType,
} 
  
const PokemonsPage = ({pokemonsState}: PokemonsPropTypes) => {

    const { status, pokemons } = pokemonsState;

    return (
        <Layout>
                <Link href='/' className="back">
                    <ArrowCircleLeft size={52} color="#0e152b" weight="fill" />
                </Link>        

                {
                    status === 1 ? (
                        <Error />
                    ) : status === 3 ? (
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