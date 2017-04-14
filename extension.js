var frutas = ["Banana", "Orange", "Apple", "Mango", "Mango", "Banana"];
Array.prototype.Buscar = function(pala){
    for (i = 0; i < frutas.length; i++) {
    	if(frutas[i]==pala){
    		return true;
    	}
	} 
	return false;
}
Array.prototype.Eliminar= function(pala) {
	for (i = 0; i < frutas.length; i++) {
    	if(frutas[i]==pala){
    		frutas.splice(i, 1);
    		break;
    	}
	} 
}
Array.prototype.EliminarPares= function(pala) {
	var cont=0;
	for (i = 0; i < frutas.length; i++) {
		for (j = 0; j < frutas.length; j++) {
	    	if(frutas[i]==frutas[j]){
	    		cont++;
	    	}
	    }
	   if(cont!=1)
	   		frutas.splice(i,cont-1);
	   	cont=0;
	} 
}

console.log(frutas.Buscar("Banana"));
frutas.Eliminar("Banana");
console.log(frutas);
frutas.EliminarPares("Banana");
console.log(frutas);