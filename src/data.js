const calculadora = (velocidade, ovo, incubadora, tempoDiario) => {
  //incubadora = 1 ou super = 0,667
  let dias = ~~((ovo * incubadora) / velocidade / (tempoDiario / 60));
  if (dias <= 1) {
    return 1;
  } else {
    return dias;
  }
};

const filtro = (array, ovo) => {
  return array.filter(x => x.egg == ovo);
};

const ordem = (array, data, order) => {
  const result = array.map(item => {
    return item;
  });
  result.sort((a, b) => {
    if (a[data] < b[data]) return -1;
    if (a[data] > b[data]) return 1;
    return 0;
  });
  return order === "decrescente" ? result.reverse() : result;
};

// const porcentagem = (arrayFiltrada, arrayDatabase) => {
//   const valorInicial = arrayFiltrada.length;
//   console.log("arrayFiltrada", arrayFiltrada);
// const soma = arrayFiltrada.reduce((acumulador, valorAtual) => {
//   acumulador + valorAtual.next_evolution.length, valorInicial;
// });

// const soma = arrayFiltrada.forEach.reduce(function(prev, curr) {
//   return [...prev, ...curr.books];
// });
// console.log(soma);

// let percent = (soma / arrayDatabase.length) * 100;
// return percent;
// };

window.data = {
  calculadora: calculadora,
  filtro: filtro,
  ordem: ordem,
  // porcentagem: porcentagem
};
