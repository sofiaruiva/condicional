function media(){
    var val1=document.getElementById ('valor1').value;
    var val2=document.getElementById ('valor2').value;
    var media=(parseInt (val1)+ parseInt (val2))/ 2;

    if (media>= 6)
    if (media==10)
        alert ("o aluno atingiu a media "+ media +" e foi aprovado com sucesso!");

    else
    alert ("parabens, aprovado! media" + media);
    else
    alert ("volte ano que vem!");
}

function comparar(){
    var val1=document.getElementById ('valor1').value;
    var val2=document.getElementById ('valor2').value;

    if (val1 == val2)
    if (val1 > val2)
    alert ('os valores são iguais')
    else
    alert ('o valor 1 é maior que o valor 2')
    else
    alert ('o valor 2 é maior que o valor 1')



}
