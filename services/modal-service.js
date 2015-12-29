/**
 * Created by Ben on 21/12/2015.
 */
angular.module('gaApp').factory('gaModal', function gaModalFactory(){
    return {
        displayModal: function(id, imageArray){
            var result = $.grep(imageArray, function(e){ return e.id == id; });
            var image = result[0];
            $(".modal-title").text(image.title);
            $(".modal-description").text(image.description);
            $(".modal-image").attr("src", image.src);
            $('#galleryModal').modal('show');
        }
    };
});