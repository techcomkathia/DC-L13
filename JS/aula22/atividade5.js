// o cleitinho quer saber qual foi o valor vendido por todas as filiais da empresa no ano de 2025
//use o método reduce para calcular a soma dos valores vendidos por todas as filiais

let filiais = [
    {nome: 'Filial 1', total: 1000},
    {nome: 'Filial 2', total: 2000},
    {nome: 'Filial 3', total: 3000},
    {nome: 'Filial 4', total: 4000},
    {nome: 'Filial 5', total: 5000}
]

//utilize o reduce para fazer o cálculo. 
//Para retornar a infomação mais completa, some ao valor faturado nos 3 primeiros meses de 2026 que é de 150000. Considere esse valor como o valor inicial para o acumulador

let totalFaturado = filiais.reduce((totalAcumulado, valorfilial)=> totalAcumulado+=valorfilial.total
,150000)