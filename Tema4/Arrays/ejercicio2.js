var paises = ["España", "Francia", "Suecia", "Italia", "Noruega", "Portugal", "Holanda"];

paises.splice(0,1,"Bélgica", "Alemania", "Dinamarca");
paises.splice(4,1,"Grecia", "Holanda");
paises.splice(8,2,"Portugal", "Suecia", "Suiza");

console.log(paises);