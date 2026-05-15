/* Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma
 loja, dado um array com os valores das transações.
 Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
 Usar o laço for para somar todos os valores;
 No final, exibir o valor total acumulado de vendas no console.*/
 
 let vendas =  [100, 200, 150, 300];
 let total = 0
 
 for(let index = 0; index < vendas.length; index++){ total += vendas[index]; }
 
 console.log("o valor total de vendas acumulado é",total);
  

 /*Calculando a média de notas: Usar um laço for para calcular a média das notas de
 um estudante.
 Instruções:
 Criar um array com as notas de um estudante(por exemplo: [8, 7, 9, 10, 6]);
 Utilizar o laço for para somar as notas;
 Calcular a média das notas e exibir o resultado no console. */
 
 let notas = [10, 9.5, 9, 8];
 
 let somatorio = 0;
 
 let quantidade_notas = notas.length;
 
 for(let nota = 0; nota < quantidade_notas; nota++) { somatorio += notas[nota];}
 
 let media  =  somatorio/quantidade_notas
 
 console.log("A média das notas é igual a",media.toFixed(2) );
 

 /*Procurando um valor no array: Usar um laço for para procurar um número específico em
 um array e verificar se ele existe.
 Instruções:
 Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
 Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
 Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
 Número encontrado" ou "Número não encontrado.*/
 
 let numeroProcurado = prompt("Digite o valor a ser procurado: ");
 
 let numeros = [10, 15, -20, -25, 30];
 
 let frase = "O numero procurado não foi encontrado";
 
 for(let numero = 0 ; numero < numeros.length; numero ++){
	 
	// console.log(numeroProcurado,numeros[numero]);
	 
	 if (numeroProcurado === numeros[numero]) {frase = "o numero procurado " + numeroProcurado + " foi encontrado"}
	 
 }
 
 console.log(frase)
 
 /*Contagem de números pares: Usar o laço for para contar quantos números pares
 existem em um array de números.
Instruções:
Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
Utilizar o laço for para contar quantos números pares existem nesse array;
Ao final, exiba a quantidade de números pares no console.*/

 
 let valores =  [1, 2, 3, 4, 5, 6];
 
 let pares = 0;
 
 for (let indice = 0; indice < valores.length; indice++) {if(valores[indice] % 2 === 0) pares++;}
 
 console.log(`Existem ${pares} numeros pares no array.`);
