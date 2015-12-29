angular.module('gaApp').controller('services', function(){
    var services = this;
    $('.service-image').addClass('animated fadeIn');
    services.selectedService = null;
    services.services = [
        {
            title: "Mowing, Far and Wide",
            body: "Acreage mowing is our specialty. No matter the terrain we have the gear and the know-how to get your lawn looking great.",
            image: "images/mowing/thumbnails/grass-field.jpg",
            url: "null"
        },
        {
            title: "Weed Spraying",
            body: "We tackle weeds with care and efficiency, always taking care to protect your lawn int he process.",
            image: "images/tools.ico",
            url: "null"
        },
        {
            title: "Fencing",
            body: "We build a variety of different fences, ranging from basic wire fences to sturdy wooden barricades.",
            image: "images/fencing/thumbnails/fencing.jpg",
            url: "null"
        },
        {
            title: "Property Sale Preparations",
            body: "We specialise in preparing properties for sale to help maximise property appeal and value",
            image: "images/property/thumbnails/property-sales.jpg",
            url: "null"
        },
        {
            title: "Other Services",
            body: "Along with our specialised services we are skilled at small scale construction, decking and logging.",
            image: "images/other-services/thumbnails/chicken-pen.jpg",
            url: "#/other"
        }
    ];
    services.selectService = function(service){
        services.selectedService = service;
        var button = $(".service-info-button");
        $(".service-header").hide().html(
            "<h2>" +
                services.services[service].title +
            "</h2>").fadeIn("slow");
        $(".service-body").hide().html(
            "<p>" +
                services.services[service].body +
            "</p>").fadeIn("slow");

        if(button)
        {
            button.hide();
        }
        if(services.services[service].url != "null")
        {
            button.html(
            "<a href='" + services.services[service].url + "'><button class='btn btn-default service-button'>More Info</button></a>"
            ).fadeIn("slow");
        }
        $(".service-image").hide().html(
            "<img src='" + services.services[service].image +"' />"
        ).delay(600).fadeIn("slow");
    };

});