$(document).ready(function() {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    // Loop through the movies and append each title as a list item
    $.each(data.results, function(index, movie) {
      $('#list_movies').append('<li>' + movie.title + '</li>');
    });
  });
});
