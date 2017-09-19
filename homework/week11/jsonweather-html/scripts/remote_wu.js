// Current Location Scripts
$(function () {

    var status = $('#status');
    $(function getGeoLocation() {
        status.text('Getting Location...');
        console.log('This has now loaded');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(long);
        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  });

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url: "http://api.wunderground.com/api/73c1c2fff6f518d1/geolookup/conditions/q/" + lat + "," + long + ".json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            var location = {
                'city': data.location.city,
                'state': data.location.state
            };
            var temp_f = data.current_observation.temp_f;
            var summary = data.current_observation.weather;
            var time = data.current_observation.local_time_rfc822;
            var wind_dir = data.current_observation.wind_dir;

            console.log(location);
            console.log(tempf);
            console.log(summary);

            var currentTemp = $('#currentTemp');
            var summary = $('#summary');
            var add1 = $('#add1');
            var add2 = $('#add2');
            var add3 = $('#add3');

            currentTemp.html(temp_f);
            summary.html(summary);
            add1.html(time);
            add2.html(wind_dir);




      $("#cover").fadeOut(250);
    }
           });

  }



  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
