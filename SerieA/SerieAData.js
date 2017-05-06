$(document).ready(function() {
  $.ajax({
    url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data) {
      for (var i = 0; i <10; i++) {
        var tr = $('<tr/>');
        var counter = i+1;

        // Indexing into data for each td element
        $(tr).append("<td>" + counter + "</td>");
        $(tr).append("<td>" + data.data.topscorers[i].fullname + "</td>");
        $(tr).append("<td>" + data.data.topscorers[i].goals + "</td>");
        $('.table').append(tr);
      }
    },
    error: function(err) {
      sweetAlert("Oops...", "Something went wrong!", "error");
    },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
    }
  });
});
