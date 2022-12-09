const baseURL = 'https://pokeapi.co/api/v2';

const getPokemonsByType = async (typeName) => {
  const resp = await fetch(`${baseURL}/type/${typeName}`)
    .then((response) => response.json())
    .then((json) => json.pokemon)
    .catch((err) => console.log(err));
  return resp;
};

const getPokemonsAmountByType = async (typeName) => {
  let amount;

  await getPokemonsByType(typeName).then((resp) => (amount = resp.length));
  console.log(amount);
};

// getPokemonsAmountByType('ground');
// getPokemonsAmountByType('normal');

const getPokemonsByTwoType = async (typeOne, typeTwo) => {
  let pokeByTypeOne;
  let pokeByTypeTwo;

  await getPokemonsByType(typeOne).then((resp) => (pokeByTypeOne = resp));
  await getPokemonsByType(typeTwo).then((resp) => (pokeByTypeTwo = resp));

  const filteredPoke = pokeByTypeOne.filter((poke) => {
    return pokeByTypeTwo.find((element) => {
      return element.pokemon.name === poke.pokemon.name;
    });
  });

  console.log(filteredPoke);
};

// getPokemonsByTwoType('ground', 'normal');

const getPokemonByName = async (name) => {
  const resp = await fetch(`${baseURL}/pokemon/${name}`)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return resp;
};

// getPokemonByName('exeggcute').then((resp) => {
//   console.log(resp.id);
// });
const getPokemonById = async (id) => {
  const resp = await fetch(`${baseURL}/pokemon/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return resp;
};

const getPokemonStatsById = async (id) => {
  const resp = await fetch(`${baseURL}/pokemon/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return resp;
};

// getPokemonStatsById(102).then((resp) => {
//   console.log(resp.stats);
// });

const orderPokemonsByType = async (ids, ordenador) => {
  const pokemons = [];

  for (let i = 0; i < ids.length; i++) {
    await getPokemonById(ids[i]).then((resp) => {
      pokemons.push(resp);
    });
  }

  // Ordenar la lista de Pokémon según el criterio especificado por el ordenador
  if (ordenador === 'name') {
    pokemons.sort((a, b) => a.name.localeCompare(b.name));
  } else if (ordenador === 'type') {
    pokemons.sort((a, b) =>
      a.types[0].type.name.localeCompare(b.types[0].type.name)
    );
  } else if (ordenador === 'weight') {
    pokemons.sort((a, b) => a.weight - b.weight);
  }

  console.log(pokemons);
  // Retornar la lista de Pokémon filtrada y ordenada
  return pokemons;
};

// orderPokemonsByType([1, 2], 'weight');

const canType = async (idPokemon, typeName) => {
  const resp = await getPokemonById(idPokemon).then((resp) => resp);
  return resp.types.some((typeSlot) => typeSlot.type.name === typeName);
};

canType(1, 'water').then((resp) => {
  console.log(resp);
});
