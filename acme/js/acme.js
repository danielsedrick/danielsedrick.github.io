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

        $('#list-nav').html("<li><a href='/acme/support/acmeindex.html'>Home</a></li><li><a href='#'>Anvils</a></li><li><a href='#'>Explosives</a></li><li><a href='#'>Decoys</a></li><li><a href='#'>Traps</a></li>");

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
//
//            if $('nav').on("click", "Home", function (evt) {
//                $("#main").show;
//            })

            var output = ('<img id="outputimg" alt="Product Image" src="' + path + '">');
            $("#prodimg").html(output);
            $("#descrip").html("<h3>Description</h3>" + descrip);
            $("#manu").html("<h3>Manufacturer:</h3>" + manu);
            $("#price").html('<h3>Price</h3><p id="pricecolor">$' + price + "</p>");
            $("#reviews").html("<h3></h3>" + reviews);
            $("#tab").html(name + " - Acme")

        })


    }

});


