function copyToClipboard(elementId) {
    // Select the password input element
    var passwordField = document.getElementById('password');

    // Create a temporary input element to hold the password text
    var tempInput = document.createElement('input');
    tempInput.value = passwordField.value;
    document.body.appendChild(tempInput);

    // Select the text in the temporary input and copy it to the clipboard
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, give some feedback to the user
    var feedbackElement = $(elementId);
    feedbackElement.text("Password copied!");
    setTimeout(function() {
      feedbackElement.text("");
    }, 2000);
  }