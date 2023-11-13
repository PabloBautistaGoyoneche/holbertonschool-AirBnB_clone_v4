/* Script that change class to available o remove */

$(document).ready(function() {
    // Ajax request
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/status/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // if the status is ok change the class
            if (data.status === 'OK') {
                $('div#api_status').addClass('available');
            } else {
                $('div#api_status').removeClass('available');
            }
        },
        error: function(textStatus, errorThrown) {
            // manage errors
            console.error('Error making the AJAX request:', textStatus, errorThrown);
        }
    });
});
