import React from 'react';

const PokemonCard = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <div>#0{item.id}</div>
                <img
                  className="card-img"
                  src={item.sprites.front_default}
                  alt=""
                />
                <div>{item.name}</div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default PokemonCard;
