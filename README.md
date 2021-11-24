## Instalando as dependencias

```bash
npm run install
# or
yarn install
```

## Iniciando LocalHost

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
<br>

<h1 align="center">
{ COVID-19 Preview Cases }
</h1>

<br>
<br>

## Lógica encontrada para criar a aplicação

De acordo com os gŕaficos da apresentados no https://ourworldindata.org/coronavirus-data. No dia
22 de janeiro de 2020 tivemos 557 casos confirmados no mundo e no dia 23 de novembro de 2022 tivemos
257.56 milhões de casos confirmados no mundo. A diferença entre essas duas datas é de 256 milhões 55 mil e 443 casos. A quantidade de dias entre
essas duas datas é de 671 dias.

<p align="center">
  <img alt="workanalove" src="initialChart.png" object-fit="contain">
</p>

No entanto, levando como um contexto geral é dificil pegar uma média aceitavel de quantos % os casos aumentaram por dia devido no ínicio da pandemia nem todos os casos serem confirmados por falta de acessibilidade dos testes de covid19.

Sendo assim levando em consideração as datas de 23 de outubro de 2022 e 23 de novembro de 2022 onde o gráfico se encontra mais estável podemos definir uma quantidade média em % para o crescimento dos casos. Entre essas datas podemos notar uma diferença de 30 dias e no dia 23/10/2022 tivemos um total de 243.80 milhões de casos, no dia 23/11/2022 estamos com um valor de 258.79 milhões, levando em conta
os dados do https://ourworldindata.org/coronavirus-data.

<p align="center">
  <img alt="workanalove" src="finalChart.png" object-fit="contain">
</p>

Por fim, uma estimativa de crescimento após os devidos calculos é de 0.3% a 0.5% por dia.
