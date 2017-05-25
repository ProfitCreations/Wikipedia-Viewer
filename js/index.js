
$(document).ready(function(){
  
  var api = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search=";
  var searchTerm = $("#search");
  var term;
  
  $("#search").keypress(function(e){
    // console.log(e);
    if ( e.originalEvent.key === "Enter" ) {
       term = api + searchTerm[0].value;
       getWiki(term);
    }
  });
  
  
  $("#submit-button").click( function(){
    term = api + searchTerm[0].value;
   getWiki(term);
  });
  function getWiki( val ){
    $.ajax({
    url: val,
    jsonp: "callback",
    dataType: "jsonp",
    success: function(data) {
      // Empty before inserting everything
      // console.log(data);
     for (var i = 0; i < data[1].length; i++) {
       $("#results").prepend('<a href="' + data[3][i] + '" target="_blank"><div class="col-xs-12 center-block"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">' + data[1][i] + '</h3></div><div class="panel-body">' + data[2][i] + '</div></div></div></a>');
     }
    }
  });
  }
  
  /* Random Search */
  $("#rand-search").click(function() {
    
    
    
  });
  
});