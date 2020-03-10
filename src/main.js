// color das navs/tabs
const removeColors = () => {
  document
    .getElementById("main")
    .classList.remove("blue", "yellow", "red", "green");
  tablink.forEach(tabs => {
    tabs.classList.remove("blue", "yellow", "red", "green");
    tabs.classList.add("inherit");
  });
};

const removeAllContent = () => {
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach(content => {
    content.classList.remove("show-tab");
  });
};

const showCurrentTab = e => {
  document.getElementById("main").classList.add(e.currentTarget.dataset.color);
  document
    .getElementById(e.currentTarget.dataset.page)
    .classList.add("show-tab");
  e.currentTarget.classList.replace("inherit", e.currentTarget.dataset.color);
};

const tablink = document.querySelectorAll(".tablink");
tablink.forEach(tab => {
  tab.addEventListener("click", e => {
    removeColors();
    removeAllContent();
    showCurrentTab(e);
  });
});

// calculadora

const daysToWeeks = days => {
  if (days > 15) {
    const addDays = days % 7;
    const weeks = Math.floor(days / 7);
    return [weeks, addDays];
  } else {
    return days;
  }
};

const calcEggRadio = document.querySelectorAll(".calc-ovo");
calcEggRadio.forEach(egg => {
  egg.addEventListener("change", e => {
    calcEggRadio.forEach(eggRadio => {
      eggRadio.classList.remove("checked-calc");
    });
    e.currentTarget.classList.add("checked-calc");
  });
});

document.getElementById("calcular").addEventListener("click", event => {
  event.preventDefault();
  const velocidade = document.querySelector("input[name ='velocidade']:checked")
    .value;
  const ovo = document.querySelector("input[name='ovo']:checked");
  const tempoDiario = document.getElementById("tempo-diario").value;
  if (+tempoDiario <= 0) {
    alert("Insira um tempo válido");
  } else if (ovo === null) {
    alert("Escolha um ovo");
  } else {
    const resultado = document.getElementById("resultado");
    const diasIncubadoraNormal = calculadora(
      velocidade,
      ovo.value,
      1,
      tempoDiario
    );
    const diasIncubadoraSuper = calculadora(
      velocidade,
      ovo.value,
      0.667,
      tempoDiario
    );
    const tempoNormal = daysToWeeks(diasIncubadoraNormal);
    const tempoSuper = daysToWeeks(diasIncubadoraSuper);
    resultado.innerHTML = `
    <h4>Incubadora Normal </h4>
    <img class="incubadora" src="./imagens/incubadoralimitada.png" alt="Incubadora Normal"/>
    <p class="margin-none">Aproximadamente</p> <p> ${
      Array.isArray(tempoNormal)
        ? tempoNormal[0] + " semanas e " + tempoNormal[1] + " dias"
        : tempoNormal + (tempoNormal === 1 ? " dia" : " dias")
    } </p>
    <h4>Incubadora Super</h4>
    <img class="incubadora" src="./imagens/superincubadora.png" alt="Incubadora Normal"/>
    <p class="margin-none">Aproximadamente</p>
    <p > ${
      Array.isArray(tempoSuper)
        ? tempoSuper[0] + " semanas e " + tempoSuper[1] + " dias"
        : tempoSuper + (tempoSuper === 1 ? " dia" : " dias")
    }`;
  }
});

// filtro de ovos
const printarpoke = document.getElementById("pokemon");
const showpokemons = document.getElementById("showpokemons");
const listapokemon = POKEMON.pokemon;
// const printarPorcentagem = document.getElementById("printar-porcentagem");

radio = document.querySelectorAll(".egg-filter-radio");
radio.forEach(egg => {
  egg.addEventListener("change", e => {
    radio.forEach(eggRadio => {
      eggRadio.classList.remove("checked");
    });
    filtrado = filtro(listapokemon, event.target.value);
    printar(filtrado, printarpoke);
    e.currentTarget.classList.add("checked");

    // porcentagem(filtrado, listapokemon);
    // let porcent = porcentagem(filtrado, listapokemon);
    // printarPorcentagem.innerHTML = `SABIA? Com o ovo de ${
    //   event.target.value
    // }, você poderá eclodir ${porcent.toFixed(2)}% dos 150 pokemons de Kanto!`;
  });
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
window.onload = printar(listapokemon, printarpoke);
