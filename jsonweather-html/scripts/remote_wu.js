// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url: "http://api.wunderground.com/api/73c1c2fff6f518d1/geolookup/q/CA/San_Francisco.json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            var location = data.current_observation.location;
            var temp_f = data.current_observation.temp_f;
            console.log("Current temperature in " + location + " is: " + temp_f);

            var heading = $('#heading');
            var h2 = $('#h2');
            var para = $('#para');

            heading.html(location);
            h2.html(temp_f);
            para.html("Current temperature in " + location + " is: " + temp_f);
        }
    })


      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
