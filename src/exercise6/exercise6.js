document
  .getElementById('myForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();
    const pokemon = document.getElementById('pokemon-input').value;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        generatePokemonElement(data);
      });
  });

function generatePokemonElement(pokemonData) {
  const pokemonInfo = document.getElementById('pokemon-info');
  let info = `
        <h2>${pokemonData.name}</h2>
        <p>Numero: ${pokemonData.id}</p>
        <p>Tipo: ${pokemonData.types[0].type.name}</p>
        <p>Peso: ${pokemonData.weight}</p>
        <p>Altura: ${pokemonData.height}</p>
        <img src="${pokemonData.sprites.front_default}">
      `;
  pokemonInfo.innerHTML = info;
}
