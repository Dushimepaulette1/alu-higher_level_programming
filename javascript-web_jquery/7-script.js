$(document).ready(function() {
  $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
    $('#character').text(data.name); // Display the character name in the DIV
  });
});
