var qtdNotas = 4;

//tag: Number para conversão da string em número;
function calcular(){
  let notaParcial = 0;
  let notaSoma = 0;
  let mediaFinal = 0;

  //entrada de  dados 
  for(let nota = 1; nota <= qtdNotas; nota++){
    notaParcial = Number(document.getElementById(`nota1${nota}`).value); //crase para interpolação
    notaSoma = notaSoma + notaParcial; //notaSoma para receber os valores

  }
  // for(let qtdNotas = 1;  <= ; qtdNotas++){


  // }

 

// let n2 = Number(document.getElementById('nota2').value);
// let n3 = Number(document.getElementById('nota3').value);
// let n4 = Number(document.getElementById('nota4').value);

// console.log(typeof(n1)); para fazer vericação no console


// processamento de dados 
mediaFinal = (notaSoma)/qtdNotas;

// alert(mediaFinal);//saída de dados
//saída de dados para a aréa media(está sendo usado o innerText )
document.getElementById('media1').innerText = mediaFinal;
}
