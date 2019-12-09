function  crearVentana() { 
	var nuevaVentana  =  window.open("","","toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,height=100,width=800,left=100,top=100");

	//comprobamos que existe la ventana
	//ya que pueden estar bloqueados los elementos emergentes 
	if (nuevaVentana) {
		// cabecera del documento html de la ventana creada
		nuevaVentana.document.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\" />\n");
		nuevaVentana.document.write("<html xmlns=\"http://www.w3.org/1999/xhtml\">\n");
		nuevaVentana.document.write("   <head>\n");
		nuevaVentana.document.write("     <meta http-equiv=\"Content-Type\" content=\"text/html;charset=iso-8859-1\" />\n");
		nuevaVentana.document.write("     <title>Ejercicio 1. Nueva ventana</title>\n");
		nuevaVentana.document.write("   </head>\n");

		// cuerpo del documento
		nuevaVentana.document.write("   <body>\n");
		nuevaVentana.document.write("      <div>\n");

		// propiedades configurables de la ventana creada con el método open
		nuevaVentana.document.write("         toolbar=yes<br />\n");
		nuevaVentana.document.write("         location=yes<br />\n");
		nuevaVentana.document.write("         directories=yes<br />\n");
		nuevaVentana.document.write("         status=yes<br />\n");
		nuevaVentana.document.write("         menubar=yes<br />\n");
		nuevaVentana.document.write("         scrollbars=yes<br />\n");
		nuevaVentana.document.write("         resizable=yes<br />\n");
		nuevaVentana.document.write("         height=400<br />\n");
		nuevaVentana.document.write("         width=800<br />\n");
		nuevaVentana.document.write("         left=100<br />\n");
		nuevaVentana.document.write("         top=100<br />\n");	
		nuevaVentana.document.write("      </div>\n");
		nuevaVentana.document.write("   </body>\n");
		nuevaVentana.document.write("</html>");
	} else {
		alert("Revisa si tienes bloqueados los pop-ups o ventanas emergentes");
	}
}