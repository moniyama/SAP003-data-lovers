// calculadora
const calculo = (velocidade, ovo, incubadora, tempoDiario) => {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p>Aproximadamente ${calculadora(
    velocidade,
    ovo,
    incubadora,
    tempoDiario
  )} dias`;
};

const tablink = document.querySelectorAll(".tablink");
tablink.forEach(tab => {
  tab.addEventListener("click", e => {
    removeAllContent();
    showCurrentTab(e);
  });
});

const removeAllContent = () => {
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach(content => {
    content.classList.remove("show-tab");
  });
};

const showCurrentTab = e => {
  document
    .getElementById(e.currentTarget.dataset.page)
    .classList.add("show-tab");
};

document.getElementById("calcular").addEventListener("click", event => {
  event.preventDefault();
  const velocidade = document.querySelector("input[name ='velocidade']:checked")
    .value;
  const ovo = document.querySelector("input[name='ovo']:checked").value;
  const incubadora = document.querySelector(
    "input[name='calc-incubadora']:checked"
  ).value;
  const tempoDiario = document.getElementById("tempo-diario").value;
  if (+tempoDiario <= 0) {
    alert("Insira um tempo válido");
  } else {
  }
  calculo(velocidade, ovo, incubadora, tempoDiario);
});

// filtro de ovos
const printarpoke = document.getElementById("pokemon");
const showpokemons = document.getElementById("showpokemons");
const listapokemon = POKEMON.pokemon;
const printarPorcentagem = document.getElementById("printar-porcentagem");

radio = document.getElementById("radio");
radio.addEventListener("change", () => {
  filtrado = filtro(listapokemon, event.target.value);
  printar(filtrado, printarpoke);
  // let porcent = porcentagem(filtrado, listapokemon);
  // printarPorcentagem.innerHTML = `SABIA? Com o ovo de ${
  //   event.target.value
  // }, você poderá eclodir ${porcent.toFixed(2)}% dos 150 pokemons de Kanto!`;
});

// ordenação 150 pokemons

select = document.getElementById("select-section");
select.addEventListener("change", () => {
  let cresc = select[select.selectedIndex].getAttribute("sort");
  ordemtodos = ordem(listapokemon, event.target.value, cresc);
  printar(ordemtodos, showpokemons);
});

// printar os cards

const printar = (array, element) => {
  let layout = "";
  element.innerHTML = "";
  array.forEach(element => {
    layout += `
      <div class="card-pokemon border">
        <img src = "${element.img}">
        <p class="name margin-none"> ${element.id}. ${element.name}</p>
        <p class="type margin-none"> Tipo: ${element.type.join(" e ")}</p>
      </div>`;
  });
  element.innerHTML = layout;
};

// menu

// openMenu = document.getElementById("openMenu").addEventListener("click", () => {
//   event.preventDefault();
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// });

window.onload = printar(listapokemon, showpokemons);
