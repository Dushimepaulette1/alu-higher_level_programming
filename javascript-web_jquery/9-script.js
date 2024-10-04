$(document).ready(function() {
  // Fetch data from the API
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function(data) {
    // Display the translation of "hello" in the DIV#hello
    $('#hello').text(data.hello);
  });
});
