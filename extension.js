var frutas = ["Banana", "Orange", "Apple", "Mango"];
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


console.log(frutas.Buscar("Banana"));
frutas.Eliminar("Banana");
console.log(frutas);