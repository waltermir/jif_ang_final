$(document).ready(function() {
    var table = $('#data').DataTable();
 
    $('#data-tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 /*
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );*/
} );