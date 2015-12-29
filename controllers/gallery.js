angular.module('gaApp').controller('gallery', function($scope, gaModal){
    $scope.displayModal = gaModal.displayModal;
    $scope.galleryImages = [
        {
            id:"gal0",
            title: "Stacking Logs",
            description: "Stacking logs for winter",
            thumb: "images/gallery/thumbnails/moving_logs.jpg",
            src:"images/gallery/moving_logs.jpg"
        },
        {
            id:"gal1",
            title: "No matter the terrain",
            description: "Trees and slopes, no problem.",
            thumb: "images/gallery/thumbnails/mowing_around_trees.jpg",
            src:"images/gallery/mowing_around_trees.jpg"
        },
        {
            id:"gal2",
            title: "A job well done",
            description: "There's nothing quite like a job well done",
            thumb: "images/gallery/thumbnails/beautiful_mower.jpg",
            src:"images/gallery/beautiful_mower.jpg"
        }
    ];
});