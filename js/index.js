$(document).ready(function() {
  var api =
    "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search=";
  var searchTerm = $("#search");
  var term;

  $("#search").keypress(function(e) {
    if (e.originalEvent.key === "Enter") {
      term = api + searchTerm[0].value;
      getWiki(term);
    }
  });

  $("#submit-button").click(function() {
    term = api + searchTerm[0].value;
    getWiki(term);
  });

  function getWiki(val) {
    $.ajax({
      method: "GET",
      url: val,
      dataType: "jsonp",
      success: function(data) {
        for (var i = 0; i < data[1].length; i++) {
          $("#results").prepend(
              '<div class="col-sm-6">'
            +  '<div class="card">'
            +    '<div class="card-block">'
            +      '<h3 class="card-title">' + data[1][i] + '</h3>'
            +      '<p class="card-text">' + data[2][i] + '</p>'
            +      '<a href="' + data[3][i] + '" class="btn btn-primary" target="_blank">Read More</a>'
            +    '</div>'
            +  '</div>'
            + '</div>'
          );
        }
      }
    });
  }

});
