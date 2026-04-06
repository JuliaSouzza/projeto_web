import { useState } from "react"

const PokemonPages = () => {

    const [pokemonId, setPokemonId] = useState(103)


    const voltarPokemon = () => {
        if(pokemonId - 1 > 0)
        setPokemonId((estadoAnterior) => estadoAnterior - 1)
    //setPokemonId(pokemonId - 1)

    }

    const adiantarPokemon = () => {
        if(pokemonId + 1 <= 150 )
        //setPokemonId(pokemonId + 1)
        setPokemonId((estadoAnterior) => estadoAnterior + 1)
    }

    return (
        <>
            <nav className="navbar bg-dark boder-buttom boder-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> Pokedex </a>
                </div>
            </nav>

            <main style={{ paddingTop: 50 }}>
                <div className="card" style={{ width: "18rem", paddingTop: "10px" }}>
                    <img
                        style={{ width: "200px" }}
                        src={
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
                            + pokemonId + ".svg"
                        }
                        className="card-img-top"
                        alt="Pokemon"
                    />

                    <div className="card-body">
                        <h5 className="card-title">Nome pokemon {pokemonId}</h5>
                        <p className="card-text">
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                    </div>

                    <div>
                        <button className="btn btn-primary" onClick={voltarPokemon}>Diminuir</button>
                        <button className="btn btn-primary" onClick={adiantarPokemon}>Acrescentar</button>
                    </div>

                </div>

            </main>


        </>


    )
}

export default PokemonPages