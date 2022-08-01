async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};
function updateUIPokemon(bicho) {
  pokemon.textContent = bicho.name;
  imagen.setAttribute("src", bicho.sprites.front_default);
};
async function init() {
  const firstPokemon = await getPokemon(1);
  console.log(firstPokemon);
  updateUIPokemon(firstPokemon);
};
search.addEventListener("change", async () => {
  const pokemon = await getPokemon(search.value);
  updateUIPokemon(pokemon);
});
init();