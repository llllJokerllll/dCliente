var texto = "Lorem Ipsum es simplemente 20170324 el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar 20180310 de las industrias desde el año 1500, cuando un impresor 20180130 (N. del T. persona que se dedica a la imprenta) desconocido usó una 20180120 galería de textos y los mezcló 20180130 de tal manera que logró hacer un libro de textos espécimen  20180222. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. 20160321 Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, 20180130 como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
var patron2 = /\b(\d{4})(\d{2})(\d{2})\b/g;

texto = texto.replace(patron2, '$3-$2-$1');

console.log(texto);