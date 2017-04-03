$('#query').keyup(function() {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
        console.log(data); // test for JSON received
        // Begin building output
        var output = '<ol>';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="#cityDisplay" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
}); // end onkeyup

$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    // With the text value get the needed value from the weather.json file
    var jsonCity = $(this).text(); // Franklin, etc...
    console.log(jsonCity);
    $.ajax({
        url: "//api.wunderground.com/api/73c1c2fff6f518d1/geolookup/conditions/q/"
        + jsonCity + ".json"
        , dataType: "jsonp"
        , success: function (data) {
            console.log(data);
            var location = data.location.city + ', ' + data.location.state;
            var temp_f = data.current_observation.temp_f;
            var feelslike_f = data.current_observation.feelslike_f;
            console.log('Location is: ' + location);
            console.log('Temp is: ' + temp_f);
            $("#feelslike").html("Feels Like: " + feelslike_f);
            $("#cityDisplay").text(location);
            $("title").html(location + " | Weather Center");
            $("#currentTemp").html(Math.round(temp_f) + '°F');
            $("#summary").text(toTitleCase(data.current_observation.icon));
            $("#cover").fadeOut(250);
            console.log(data);

        }

    });
    $.ajax({
        url: "//api.wunderground.com/api/73c1c2fff6f518d1/forecast/q/"
        + jsonCity + ".json"
        , dataType: "jsonp"
        , success: function (data) {
            var high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            var low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
            console.log("High is " + high);
            console.log("Low is " + low);
            $("#high").html("High Temperature: " + high);
            $("#low").html("Low Temperature: " + low);
        }

    })
    $("#searchResults").html("");
});



function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

