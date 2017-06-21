$(document).ready(function(){

  var long;
  var lat;

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    console.log(long);
    console.log(lat);
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&appid=99eb4f13a57d1b4fff2c12ad94305001';
    console.log(api);

    $.getJSON(api, function(data){
      var city = data.name;
      var country = data.sys.country;
      var temperature= data.main.temp;

      $('body').html("hello world!"+city);
    });






  });
}




});
