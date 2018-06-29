$(document).ready(function () {
    $(".form1").submit((event) => {
        event.preventDefault();
        console.log(event);
        $("#Toprow").append("<button class='giphy' data-name='" + event.target[0].value + "' >" + event.target[0].value + " </button>")
        $('.giphy').css('width', '5%');

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
                var pRating = $("<p>").text("Rating: " + element.rating);
                var urlfrozengif = element.images.url;
                var image = $("<img class='img-animate' >").attr("src", element.images.fixed_height_still.url).addClass("animal-photo");
                image.attr("src", element.images.fixed_height_still.url);
                image.attr({
                    'data-animate': element.images.fixed_height.url
                });
                image.attr({
                    'data-state': "still"
                });
                image.attr({
                    'data-still': element.images.fixed_height_still.url
                });
                var imageDiv = $("<div>").addClass("image-div");
                imageDiv.append(pRating)
                imageDiv.append(image);
                $("#images").append(imageDiv);
                // $("#photo").append('<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');


            });
        });
    });



$(document).on("click", ".img-animate", function () {

    var state = $(this).attr('data-state');
    console.log(state)

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});


/*
let curr = $(this);
if (curr.attr("dataState") === "still") {
    curr.attr("src", `${curr.attr("active")}`);
    curr.attr("dataState") = "active");
} else {
    curr.attr("src", `${curr.attr("still")}`);
    curr.attr("dataState") = "still");
};
*/



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