var frutas = ["Banana", "Orange", "Apple", "Mango"];
Array.prototype.Buscar = function(pala){
    for (i = 0; i < frutas.length; i++) {
    	if(frutas[i]==pala){
    		return true;
    	}
	} 
	return false;
}

console.log(frutas.Buscar("Banana"));