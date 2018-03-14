let palabras=["internet", "andres", "isanevys", "4geeks", "laptop", "javaScript", "baqueta"];
let pistas=["Conexion WWW", "primogenito", "esposa", "academia", "sinonimo PC", "lenguaje programacion", "para tocar bateria"]
let aleatorio=Math.floor(Math.random()*(palabras.length-1)+0);
let result=palabras[aleatorio];

//result = result.split("_");
 document.getElementById("pista").innerHTML=pistas[aleatorio];
document.getElementById('campoPalabra').addEventListener("keypress", validar);


function validar(e){
	if (e.key==="Enter"){
		if (document.getElementById('campoPalabra').value.toLowerCase()===result.toLowerCase()){
			 document.getElementById("msg_result").innerHTML="ACERTASTE!";
		

		} else {
			document.getElementById("msg_result").innerHTML="FALLASTE!, INTENTA DE NUEVO";			

		}
	}
}


	







