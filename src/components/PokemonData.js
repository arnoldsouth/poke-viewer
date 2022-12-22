import React from 'react';

const PokemonData = ({ data }) => {
  return (
    <>
      {!data ? (
        ''
      ) : (
        <>
          <h1>{data.name}</h1>
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
          </div>

          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <div>{poke.ability.name}</div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <div>
                    {poke.stat.name}: {poke.base_stat}
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default PokemonData;
