$(document).ready(function () {
    // Init
    $('#result').hide();

    // Predict
    $('#btn-report').click(function () {
        var form_data = new FormData($('#details')[0]);

        $(this).hide();
        
        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('#result').fadeIn(600);
                $('#result').text('Prediction : '+data);
                console.log('Success!');
            },
        });
    });

});
