
//for changing the flag next to the language 
$(document).ready(function () {
    $('#language-select').change(function () {
        var selectedValue = $(this).val();
        var flagContainer = $('.FlagContainer');

        if (selectedValue === 'en') {
            flagContainer.attr('src', '/Images/icons/britainFlag.png');
        } else if  (selectedValue === 'AR') {
            flagContainer.attr('src', '/Images/icons/SaudiArabiaFlag.png');
        }
    });
});