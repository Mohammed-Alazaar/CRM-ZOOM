
$(document).ready(function () {
    const fileInput = $('#add-photos');
    const fileNameText = $('.file-name');
    const selectedPhotosContainer = $('.selected-photos');
    const maxReachedText = $('.max-reached');

    const MAX_PHOTOS = 5; // Maximum number of photos allowed

    fileInput.on('change', function (event) {
        selectedPhotosContainer.empty(); // Clear any previously displayed photos

        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            if (selectedFiles.length > MAX_PHOTOS) {
                maxReachedText.text(`Maximum ${MAX_PHOTOS} photos allowed.`);
                return;
            } else {
                maxReachedText.text('');
            }

            fileNameText.text(`${selectedFiles.length} file(s) selected`);

            for (let i = 0; i < selectedFiles.length; i++) {
                const photoDiv = $('<div>').addClass('selected-photo');
                const photoImage = $('<img>')
                    .attr('src', URL.createObjectURL(selectedFiles[i]))
                    .attr('alt', selectedFiles[i].name);

                photoDiv.append(photoImage);
                selectedPhotosContainer.append(photoDiv);
            }
        } else {
            fileNameText.text('No files selected');
            maxReachedText.text('');
        }
    });
});