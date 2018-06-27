$(document).ready(function () {
    $(".form1").submit((event) => {
        event.preventDefault();
        console.log(event);
        $("#Toprow").append("<button class='giphy' data-name='" + event.target[0].value + "' >" + event.target[0].value + " </button>")

    })
})


$(document).on("click",
    ".giphy",
    function () {
        var animal = $(this).data("name");
        console.log(animal);
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key=lWdEQXp6Izp9T8hHIahsoS121guOW9Nh&q=" + animal + "&limit=10&offset=0&rating=G&lang=en",
            method: "GET"
        }).then(function (result) {
            console.log(result)

            result.data.forEach(element => {
                var urlgif = element.images.original.url
                var urlfrozengif = element.images.url;
                var image = $("<img class='img-animate' >").attr("src", urlgif).addClass("animal-photo");
                $("#images").append(image);
                // $("#photo").append('<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
                $('.img-animate').click(function () {
                    var temp = urlgif;
                    urlgif = urlfrozengif;
                    urlfrozengif = temp;

                });
            });
        });
    })

//var staticGifSuffix = "-static.gif";
//var gifSuffix = ".gif";


/*

$(".img-animate").each(function () {

    $(this).on("click", function () {
        var urlfrozengif = $(this).data.image.url;
        console.log("urlfrozengif", urlfrozengif);

        // function () {
        //  var originalSrc = $(this).attr("src");
        //  $(this).attr("src", originalSrc.replace(staticGifSuffix, gifSuffix));
        //  },
        //   function () {
        //   var originalSrc = $(this).attr("src");
        //  $(this).attr("src", originalSrc.replace(gifSuffix, staticGifSuffix));
        // }
    });

});
*/

/*
a=1;b=2;
temp=a;a=b;
b=temp;
*/