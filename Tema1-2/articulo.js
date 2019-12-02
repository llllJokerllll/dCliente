var nombre = prompt("Introduzca el nombre del artículo:", "Objeto");
var precio = prompt("Introduzca el precio del artículo:", 0);
var iva = prompt("Introduzca el iva del artículo:", 21);

if(isNaN(precio) || isNaN(iva)){
	alert("Introduzca valores numéricos");
}else if (iva == "") {
	alert("El precio del producto " + nombre + " es: " + precio * 1.21 + " €");
}else{
	let precioTotal = precio * ( 1 + iva / 100)
	alert("El precio del producto " + nombre + " es: " + precioTotal + " €");
}