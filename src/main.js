// calculadora

const resultado = document.getElementById("resultado");

const calculo = (velocidade, ovo, incubadora, tempoDiario) => {
  resultado.innerHTML = `<p>Você irá caminhar por aproximadamente:  ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias`;
};

const peixinho = document.getElementById("calcular").addEventListener("click", () => {
  event.preventDefault();
  const velocidade = document.querySelector("input[name =\"velocidade\"]:checked").value;
  const ovo = document.querySelector("input[name=\"ovo\"]:checked").value;
  const incubadora = document.querySelector("input[name=\"incubadora\"]:checked").value;
  const tempoDiario = document.querySelector("input[name=\"tempo\"]:checked").value;
  calculo(velocidade, ovo, incubadora, tempoDiario);
});

// filtro e ordenação
const printarpoke = document.getElementById("pokemon");
const showpokemons = document.getElementById("showpokemons");
const listapokemon = POKEMON.pokemon;

radio = document.getElementById("radio");
radio.addEventListener("change", () => {
  filtrado = filtro(listapokemon, event.target.value);
  printar(filtrado, printarpoke);
});

select = document.getElementById("select-section");
select.addEventListener("change", () => {
  let cresc = select[select.selectedIndex].getAttribute("sort");
  ordemtodos = ordem(listapokemon, event.target.value, cresc);
  printar(ordemtodos, showpokemons);
});

const printar = (array, element) => {
  let layout = "";
  element.innerHTML = "";
  array.forEach(element => {
    layout += `
    <div class="card">
      <div class="card-pokemon">
        <img src = "${element.img}">
        <span class="name"> ${element.id}.${element.name}</span>
        <p class="type"> Tipo:${element.type}</p>
      </div>
    </div>`;
  });
  element.innerHTML = layout;
};

openMenu = document.getElementById("openMenu").addEventListener("click", () => {
  event.preventDefault();
  var menu = document.getElementById("myTopnav");
  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
});

window.onload = printar(listapokemon, showpokemons);
