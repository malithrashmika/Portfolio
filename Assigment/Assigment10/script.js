$(document).ready(function() {
    let display = $('#display');

    // Function to update the display with button values
    $('.btn').on('click', function() {
        let value = $(this).data('value');
        if (value !== undefined) {
            display.val(display.val() + value);
        }
    });

    // Clear display
    $('#clear').on('click', function() {
        display.val('');
    });

    // Calculate result
    $('#equals').on('click', function() {
        try {
            let result = eval(display.val());
            display.val(result);
        } catch {
            display.val('Error');
        }
    });
});
