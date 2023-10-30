$(document).ready(function() {
    $('#searchInput').on('input', function() {
        var query = $(this).val().toLowerCase();
        var resultsContainer = $('#searchResults');
        resultsContainer.empty();

        $('a').each(function() {
            var linkText = $(this).text().toLowerCase();
            if (linkText.includes(query)) {
                var resultLink = $('<a></a>');
                resultLink.attr('href', $(this).attr('href'));
                resultLink.text($(this).text());
                resultsContainer.append(resultLink);
            }
        });

        if (resultsContainer.is(':empty')) {
            resultsContainer.text('No matching links found.');
        }
    });
});