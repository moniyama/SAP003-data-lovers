const calculadora = (velocidade, ovo, incubadora, tempoDiario) => { //incubadora = 1 ou super = 0,667
  let dias = ~~((ovo*incubadora/velocidade)/(tempoDiario/60));
  return dias
};

window.data = calculadora;
// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
// const POKEMONS = POKEMON.pokemon;

// const example = () => {
//   return "id";
// };


// let image = []

// const filterNames = () => {
//   for (let x of POKEMONS) {
//     x.name + `<img src="${x.img}"/>`;

//   }
// };
// window.data = filterNames;
