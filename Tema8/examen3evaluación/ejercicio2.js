$(document).ready(function() {

    function eventos() {
        if ($('li').val() != undefined) {
            $('li').off();
            $('li:last').on({
                'click' : function() { $(this).css('color', 'red'); },
                'dblclick' : function() { 
                    $(this).remove();
                    eventos(); 
                }
            });
        }
    }

    $('#btnvacia').click(function() {
        $('li').remove();
    });

    $('#btneliminar').click(function() {
        $('li:last').remove();
        if ($('li').val() != undefined) {
            $('li').off();
            $('li:last').on({
                'click' : function() { $(this).css('color', 'red'); },
                'dblclick' : function() { 
                    $(this).remove();
                    eventos(); 
                }
            });
        }
    });

    $('#btnanadir').click(function() {
        if ($('#nuevo').val() != "") {
            $('ol').append('<li>' + $('#nuevo').val() + '</li>');
            $('#nuevo').val('');
            if ($('li').val() != undefined) {
                $('li').off();
                $('li:last').on({
                    'click' : function() { $(this).css('color', 'red'); },
                    'dblclick' : function() { 
                        $(this).remove();
                        eventos(); 
                    }
                });
            }
        }
    });
});