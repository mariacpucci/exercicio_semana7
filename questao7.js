var idade = prompt("Insira sua idade");

if (idade < 16){
    console.log("Não pode votar!");
}
else if (idade >= 16 && idade <18){
    console.log("Voto facultativo!");
}
else {
    console.log("Voto obrigatório!");
}