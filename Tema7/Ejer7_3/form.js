$(document).ready(function () {
    $('body').append('<fieldset><legend>FORMULARIO');

    $('fieldset').append('<form name="formulario" id="formulario" action="http://www.google.es" method="get">');
    
    $('#formulario').append('<label for="nombre">NOMBRE:');
    $('#formulario').append('<input type="text" name="nombre" id="nombre"/>');
    $('#formulario').append('<label for="apellidos">APELLIDOS:');
    $('#formulario').append('<input type="text" name="apellidos" id="apellidos" />');
    $('#formulario').append('<label for="edad">EDAD:');
    $('#formulario').append('<input name="edad" type="text" id="edad" maxlength="3" />');
    $('#formulario').append('<label for="nif">NIF:');
    $('#formulario').append('<input name="nif" type="text" id="nif" />');
    $('#formulario').append('<label for="email">E-MAIL:');
    $('#formulario').append('<input name="email" type="text" id="email" />');
    $('#formulario').append('<label for="provincia">PROVINCIA:');
    
    $('#formulario').append('<select name="provincia" id="provincia">');
    $('#provincia').append('<option value="0" selected="selected">Seleccione Provincia');
    $('#provincia').append('<option value="C">A CORUÑA');
    $('#provincia').append('<option value="LU">LUGO');
    $('#provincia').append('<option value="OU">OURENSE');
    $('#provincia').append('<option value="PO">PONTEVEDRA');
    
    $('#formulario').append('<label for="fecha">Fecha Nacimiento:');
    $('#formulario').append('<input name="fecha" type="text" id="fecha" />');
    $('#formulario').append('<label for="telefono">Teléfono:');
    $('#formulario').append('<input name="telefono" type="text" id="telefono" maxlength="9"/>');
    $('#formulario').append('<label for="hora">Hora de visita:');
    $('#formulario').append('<input name="hora" type="text" id="hora" />');
    $('#formulario').append('<button type="reset" name="limpiar" id="button" value="Limpiar"/> Limpiar');
    $('#formulario').append('<button type="submit" name="enviar" id="enviar" value="Enviar"/> Enviar');

    $('body').append('<div id="errores"></div>');
    $('body').append('<div id="intentos"></div>');

    $('input').mouseover(function () { 
        $(this).toggleClass('error');
    });
});