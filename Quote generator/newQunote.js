$(document).ready(function(){

  //When button is clicked then get quote from API link
  $('#b').on('click', function(){
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

    var getQuote = function(data) {
      $("#qunote").text(data.quoteText);

      if (data.quoteAuthor === '') {
        data.quoteAuthor = 'Unknown';
      }
      $("#author").text('- ' + data.quoteAuthor);


    // When Twitter button is clicked then twit this quote
      $('#twitter').on('click', function(){
        $("#tweet-quote").attr(
            "href",
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURIComponent('"' + data.quoteText + '" ' + data.quoteAuthor)
        );
          });
};

    $(document).ready(function() {
      $.getJSON(url, getQuote, 'jsonp');
    });

    $("#quote").click(function() {
      $.getJSON(url, getQuote, 'jsonp');
    });
  });
});
