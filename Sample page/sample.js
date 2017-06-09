$('#text1').hide();
$('#text2').hide();
$('#text3').hide();


$(document).ready(function(){

  // smooth scroll
  $('#footer-btn').each(function(){
      $(this).click(function(){
          $('html,body').animate({
            scrollTop: 0
          }, 'slow');
      });
  });

// Change color of "ipsum words"
$('#push-btn').on('click',function(){
	var search = 'ipsum';
  $("p:contains('"+search+"')").each(function(){
  	var regex = new RegExp(search,'gi');
    $(this).html($(this).text().replace(regex, "<span style='color:red'><strong>"+search+"</strong></span>"));
          setTimeout(function() {
              $("p:contains('"+search+"')").each(function(){
              	var regex = new RegExp(search,'gi');
                $(this).html($(this).text().replace(regex, "<span style='color:black'>"+search+"</span>"));
              });
          }, 3000);
  });
});

// "read more" function
  $("#rmore1").click(function() {
    var elem = $("#rmore1").text();
    if (elem == "read more") {

      $("#rmore1").text("read less");
      $("#text1").slideDown();
    } else {

      $("#rmore1").text("read more");
      $("#text1").slideUp();
    }
  });
  $("#rmore2").click(function() {
    var elem = $("#rmore2").text();
    if (elem == "read more") {

      $("#rmore2").text("read less");
      $("#text2").slideDown();
    } else {

      $("#rmore2").text("read more");
      $("#text2").slideUp();
    }
  });
  $("#rmore3").click(function() {
    var elem = $("#rmore3").text();
    if (elem == "read more") {

      $("#rmore3").text("read less");
      $("#text3").slideDown();
    } else {

      $("#rmore3").text("read more");
      $("#text3").slideUp();
    }
  });














});
