/**
 * Created by Ben on 23/11/2015.
 */
angular.module('gaApp').controller('testimonials', function(){
    var testimonials = this;
    testimonials.testimonys = [
        {
            name: "Nelson Green",
            body: "These guys are great"
        },
        {
            name: "Doug",
            body: "Absolutely the best!"
        }
    ];
});