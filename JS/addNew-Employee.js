function copyToClipboard() {
  var passwordField = document.getElementById('password');
  var tempInput = document.createElement('input');
  tempInput.value = passwordField.value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Show "Added to Clipboard" message
  var feedbackElement = document.getElementById('copyPasswordFeedback');
  feedbackElement.textContent = "Added to Clipboard";
  feedbackElement.style.visibility = "visible";
  setTimeout(function() {
    feedbackElement.style.visibility = "hidden"; // Hide the message after a delay
  }, 2000); // Hide the message after 2 seconds (adjust the delay as needed)
}