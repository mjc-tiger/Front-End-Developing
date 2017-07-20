$(document).ready(function(){

  var long;
  var lat;

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    console.log(long);
    console.log(lat);
    var api = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long+'&units=metric&appid=99eb4f13a57d1b4fff2c12ad94305001';
    console.log(api);

    $.getJSON(api, function(data){
      var city = data.name;
      var country = data.sys.country;
      var temperature = data.main.temp;
      var tempSwap = true;
      var description = data.weather[0].description;
      var pressure = data.main.pressure;
      var humidity = data.main.humidity;
      var wind = data.wind.speed;
      var clouds = data.clouds.all;
      var icon = data.weather[0].icon;


      $('#city').html(city+', '+country);
      $('#icon').html("<img src='"+icon+"'></img>");


      $('#temp').html(temperature+' &#176C');
      $('#temp').click(function(){
        if(tempSwap === true) {
          var fTemp = temperature*9/5+32;
          $('#temp').html(fTemp+' F');
          tempSwap = false;
        } else {
          $('#temp').html(temperature+' &#176C');
          tempSwap = true;
        }
      });
      $('#descr').html(description);
      $('#pressure').html('pressure: '+pressure+' [hPa]');
      $('#humidity').html('humidity: '+humidity+' [%]');
      $('#wind').html('wind: '+wind+' [m/s]');
      $('#clouds').html('clouds: '+clouds+' [%]');
    });
  });
}
});
