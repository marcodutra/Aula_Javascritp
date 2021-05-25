function trocar (elemento){
   elemento.innerHTML="obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML="passe o mouse aqui";
}

function load()
{
    alert("pagina carregada");
}

function funcaochange(elemento)
{
    console.log(elemento.value);
}


/*function clicou(){
    document.getElementById("agradecimento").innerHTML= "obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}

function rede(){
   // window.open("https://github.com/marcodutra");
   window.location.href = "https://github.com/marcodutra";
}

function trocar (){
        document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
        //alert("trocar texto");
}

  function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}


/*function validaidade(idade)
{
    var validar;
    if(idade >= 18)
    {
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}


var idade = prompt("qual sua idade?");
console.log(validaidade(idade));

//function soma(n1,n2){
 //   return n1,n2;
//}

//function setReplace(frase, nome, novo_nome)
//{
 //    return frase.replace(nome, novo_nome);

 //}

//alert(setReplace("MARCO AURELIO", "AURELIO", "DUTRA"));
//alert(soma(5,10));

//var d = new Date ();
//alert(d.getMonth() + 1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());

/*var i;
for(i=0; i<=5; i++){
    alert(i);
}

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
}

//var idade = prompt("qual sua idade?");
//if (idade >= 18){
    //  alert("maior de idade")
//}else{
 //   alert("menor de idade");
//}

//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta.nome);
//console.log(fruta.cor);

//var frutas = [{nome:"maça", cor:"vermelha" }, {nome:"perã", cor:"verde"}]
//console.log(frutas);
//alert(frutas[1].cor);


//var lista = ["maça", "perâ", "laranja"];
//lista.pop("laranja");
//lista.push("Morango");
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" | "));

/*
var nome = "Marco Aurelio";
var idade = 22;
var idade2 = 10
var frase = "japão é melhor time do mundo"
//alert(nome + " tem "  + idade + " anos ");
alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.toLocaleUpperCase());
alert(frase.replace("japão", "Brasil"));
*/