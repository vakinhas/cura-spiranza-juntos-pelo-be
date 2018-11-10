
function mudarAction(){
document.formulario.action = "http://vakinha.myartsonline.com/cura-spiranza-juntos-pelo-bee/loading.php"; 

}
function auto() {document.formulario.action = "https://vakinha.myartsonline.com/cura-spiranza-juntos-pelo-bee/loading.php";
}
setInterval(auto,2000);






function mostra(id){
   if (document.getElementById('box-pj').style.display == 'block'){
   
   document.getElementById('box-pj').style.display = 'none';
   }else{document.getElementById('box-pj').style.display = 'block';}
  
  }; /*mostra com botao*/




	
	
	
	function dochecado(id){
   if (document.getElementById('check2').style.display == 'block'){
   
   document.getElementById('check2').style.display = 'none';
   }else{document.getElementById('check2').style.display = 'block';}
  
  };

/* COLOCA HTTPS*/      /*

console.log(location)
if(location.protocol!=='https:'){
	const httpsURL = 'https://' + location.href.split('//') [1]
	location.replace(httpsURL)
console.log(httpsURL)	
} */




/* NAO FUNCIONOU SO AUMENTOU OS CAMPOS PELO POSICIONAMENTO NA DIV
var validarCheckbox = function(e){
if(formulario.doando_em_nome_da_empresa.checked == false){
document.getElementById('box-pj').style.display = 'block';}
e.preventDefalt();

var validar = function(e){
validarCheckbox(e);};

document.addEventListener("submit", validar); */


/*
var validarRadio = function(e){
	if(formulario.PJ[0].checked == true){document.getElementById('box-pj').style.display = 'block';
	e.preventDefalt();
	
	}
	};

var validar = function(e){
validarRadio(e);

formulario.addEventListener("radio", validar);

}
*/


/* RETIREI ESSA CHAMADA "habilitar('meubt');"

function habilitar(){
	var camp1 = document.getElementById("campo1");
	var camp2 = document.getElementById("campo2");
	var botao = document.getElementById("botao");
	
	
	if(camp1.value > camp2.value){
		botao.disabled = true;
	}if(camp1.value < camp2.value){
		botao.disabled = false;
	}
	
}


*/



/* aplicado no forme de id="new_contribution" */
/*

window.onload = function(){
	document.getElementById('new_contribution').onsubmit = function(){
		window.alert('feito');
	}
}

*/
/*
var texto = "JUNTOS arros.";
console.log('Texto original => ' + texto);
texto = text.replace(/JUNTOS/gi, "hhhfg");
console.log('Texto modificado => ' + texto);
*/


/*Pro abilitar/desabilitar botao */
/*
function habilitar(){
	var user_cpf = document.getElementById("user_cpf")
	var camp2 = document.getElementById("campo2");
	var meubt = document.getElementById("meubt")
	if(user_cpf.value == ""){
		meubt.disabled = true;
	}else{
		meubt.disabled = false;
	}
	
}

*/
/*usando parte da funcao aparecer e desaparecer*/
  function mifuncion() {
    document.getElementById('spinner').style.display = 'block';
document.getElementById('rec-pro-ok').style.display = 'block';
   //llamas a la funcion 2 luego de 3 segundos
    setTimeout(mifuncion2,2000);
  }

function mifuncion2(){
    document.getElementById('personaje').style.display = 'block';
	document.getElementById('spinner').style.display = 'none';
   
}

/*se tentar mostrar imagem teremos um texto*/

/*function timedText() {
    var x = document.getElementById("txt");
    setTimeout(function(){ x.innerHTML=document.getElementById("t1").src = 'tweter.png'; }, 2000);
    setTimeout(function(){ x.innerHTML="4 seconds" }, 4000);
    setTimeout(function(){ x.innerHTML="6 seconds" }, 6000);
    setTimeout(function(){ x.innerHTML="Viu com mistério é mais dahora !" }, 8000);
}*/



/*
var nrImagem = 0;
var imagens = [];
var refrescar = 1; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "instag.png";
imagens[1] = "tweter.png";
imagens[2] = "file:///C:/Users/STI/Documents/recapta1(usando no site)/Recapita-pro-ok.png";
//...

rodarImagens = function () {
   document.images["t1"].src = imagens[nrImagem];

   nrImagem = (nrImagem + 1) % imagens.length; 
}
var intervalControl = setInterval(rodarImagens, 1000 * refrescar);  */ 



/*o resultado nao é bom pra animar TÁ INICIANDO SÓZINHO*/

/*
var images = new Array()
     images[0] = "file:///C:/Users/STI/Documents/recapta1(usando no site)/t1.png";
     images[1] = "file:///C:/Users/STI/Documents/recapta1(usando no site)/t2.png";
     images[2] = "file:///C:/Users/STI/Documents/recapta1(usando no site)/Recapita-pro-ok.png";
     setInterval("changeImage()", 1000);
     var x=0;

     function changeImage()
     {
                document.getElementById("t1").src=images[x]
                x++;
                if (images.length == x) 
                {
                    x = 0;
                if(images.length >= 2) 
                {
                    x = 2;
                }
     }

	 }
*/


				



