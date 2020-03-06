# Egglator

## Índice

- [1. Definição do produto](#1-egglator)
- [2. Histórias do usuário](#2-histórias-do-usuário)
- [3. Protótipo de baixa fidelidade](#3-protótipo-de-baixa-fidelidade)
- [4. Teste de usabilidade](#4-teste-de-usabilidade)

---

## 1. Egglator

Egglator é uma página para auxiliar os jogadores de Pokemon Go encontrar um equilíbro entre a sua rotina e o jogo.

Muitas vezes, com a rotina corrida dos tempos atuais, jogadores e ex-jogadores podem se sentir desestimulados a caminhar e chocar os ovos do jogo, que são imprescindiveis para qualquer treinador que almeja completar a sua Pokedex ou fortalecer seus Pokemons coletando Candies.
Porém, todas as pessoas caminham diariamente, seja para ir a escola ou ao trabalho, para ir ao ponto de onibus, fazer uma baldeação no metro ou até mesmo do carro para o escritorio.

Assim, o site apresenta uma seção de calculadora, onde é possivel estimar o tempo necessário (em dias) para eclodir um ovo pokemon, com base nessas caminhadas de rotina diária. O que parecia ser longas distancias e cansativas caminhadas são transformadas em dias comuns, sendo possivel adequar o jogo a sua rotina e eclodir ovos sem percerber.

Adicionalmente, disponibilizamos uma seção para identificar quais pokemons podem sair de cada ovo, e também um seção para consultar e ordenar os pokemons da região de Kanto por numero e nome (A-Z & Z-A).

## 2. Histórias do usuário

1 - Como usuário desejo saber quais são os possíveis pokemons que sairão de cada ovo pra avaliar se me interessa chocar o tipo de ovo que tenho disponivel.

2 - Como usuário desejo saber quanto tempo será necessário para chocar um ovo afim de adequar o jogo a minha rotina

3 - Como usuário desejo visualizar e ordenar os 150 pokemons da região de Kanto.

## 3. Protótipo de baixa fidelidade

Inicialmente, foi feito o protótipo geral do site, no qual foram propostos 4 seções: sobre o site, sobre o jogo Pokemon Go, a calculadora e o filtro de pokemons por ovos. Os protótipos são mostrados abaixo.

Protótipo Geral:
![protótipo geral](https://trello-attachments.s3.amazonaws.com/5d77cf88d423548d714adb4f/5d77d156b76d8c467c141c6a/73492c411f4dfdd1824506b28b3c561c/prototipo_geral.jpeg)

Detalhes da calculadora:
![protótipo calculadora](https://trello-attachments.s3.amazonaws.com/5d77cf88d423548d714adb4f/5d77d156b76d8c467c141c6a/6b987e6f8f49c0e62aa952124ee0987e/WhatsApp_Image_2019-09-11_at_14.16.39.jpeg)

Ao longo do desenvolvimento, percebeu-se que a seção sobre Pokemon Go não seria necessário, visto que o nossos usuários já conheceriam o jogo.

Optou-se em utilizar a ordenação em TODOS os pokemons ao invés de aplicar apenas nos pokemons filtrados por ovo, visto que não se viu necessidade de ordenação de resultados em quantidades reduzidas.

## 4. Teste de usabilidade

No teste de usabilidade foi detectado os seguintes problemas:

- O menu horizontal não fica acessível para celular
- Sem intrução de uso da calculadora o usuário não compreende o comportamento

Resolveu-se os problemas alterando o menu em lista, deixando-o responsivo para telas menores e acrescentando um texto explicativo na calculadora.
