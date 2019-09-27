tempoRestante = 60*60; //a quantidade de segundos totais
 // segundos

function cronometro(primeiravez){
	


	//document.getElementById("cronometro").innerHTML=minutos+":"+segundos;
	

	if(tempoRestante==0){
		document.getElementById("cronometro").innerHTML="00:00";
		document.getElementById('questao1').disabled = "disabled";
		document.getElementById('questao2').disabled = "disabled";
		
	}else{
		//1 h = 3600 segundos, 1 minuto = 60 segundos

		var segundos = tempoRestante--;
		var segundo = segundos % 60;
		var minutos = segundos / 60;
		var minuto = minutos % 60;

		
		var ms = Math.trunc(minuto)+":"+Math.trunc(segundo); //String.format ("%02d:%02d",  minuto, segundo);
		
		document.getElementById("cronometro").innerHTML=ms;


	}

	if(primeiravez==1){
		document.getElementById("cronometro").innerHTML="59:59";

	}
}
	window.setInterval("cronometro(0)",1000);