jQuery(document).ready(function ($) {
    $.ajax({
        url: "http://api.wunderground.com/api/73c1c2fff6f518d1/conditions/q/ID/Rexburg.json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            var location = data.current_observation.observation_location.city;
            var temp_f = data.current_observation.temp_f;
            console.log("Current temperature in " + location + " is: " + temp_f);

            var heading = $('#heading');
            var h2 = $('#h2');
            var para = $('#para');

            heading.html(location);
            h2.html(temp_f);
            para.html("Current temperature in " + location + " is: " + temp_f);
        }
    });
});
