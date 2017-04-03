$.ajax({
    url: "/acme/js/acme.json",
    dataType: "json",
    success: function (data) {
        console.log(data);
        var home = data['nav']['1'];
        var anvils = data['nav']['2'];
        var explosives = data['nav']['3'];
        var decoys = data['nav']['4'];
        var traps = data['nav']['5'];
        console.log(traps);

        $('#list-nav').html("<li><a href='#'>Home</a></li><li><a href='#'>Anvils</a></li><li><a href='#'>Explosives</a></li><li><a href='#'>Decoys</a></li><li><a href='#'>Traps</a></li>");

        $('nav').on("click", "a", function (evt) {
            evt.preventDefault();
            var navClick = $(this).text();
            console.log(navClick);

            var name = data[navClick]["name"];
            console.log(name);
            var path = data[navClick]['path'];
            var descrip = data[navClick]['description'];
            var manu = data[navClick]['manufacturer'];
            var price = data[navClick]['price'];
            var reviews = data[navClick]['reviews'];
            console.log(path)
            console.log(descrip)
            console.log(manu)
            console.log(price)


            $("#main").hide();

            var output = ('<img id="outputimg" alt="Product Image" src="' + path + '">');
            $("#prodimg").html(output);
            $("#descrip").html(descrip);
            $("#manu").html(manu);
            $("#price").html(price);
            $("#reviews").html(reviews);


        })


    }

});


