var texto = "Tres tristes tigres tragaban trigo en tres tristes trastos, en tres tristes trastos tres tristes tigres tragaban trigo en un trigal";

var a = /\b[\w]{2}\b/;
var b = /\b[\w]{2}[aeiou][\w]\b/;
var c = /\btr[\w]*/;
var d1 = /\btigres\b/g;
var d2 = "leones";
alert(texto.replace(d1, d2));
var e1 = /\s/g;
var e2 = "";
alert(texto.replace(e1, e2));