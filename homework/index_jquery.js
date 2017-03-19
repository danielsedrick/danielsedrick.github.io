jQuery(document).ready(function ($){
    $.ajax({
        url: "week5/weather_templates/weather.json",
        dataType: "json",
        succes: function (data) {
            console.log(data);
        }
    })
})
