/**
 * Created by Ben on 21/12/2015.
 */
angular.module('gaApp').controller('other', function($scope, gaModal){
    $scope.displayModal = gaModal.displayModal;
    imgSrc = 'images/other-services/';
    imgSrcThmb = 'images/other-services/thumbnails/';

    var image = function(name){
        return imgSrc + name + ".jpg"
    };
    var thmb = function(name){
        return imgSrcThmb + name + ".jpg"
    };
    $scope.loggingImages = [
        {
            id:"log0",
            title: "Chainsawing",
            description: "Chainsawing trees for firewood",
            src: image("tree-chopping"),
            thumb: thmb("tree-chopping")
        },
        {
            id:"log1",
            title: "Stump Grinding",
            description: "Grinding stumps down to ground level for clean finish",
            src: image("stump-grinding"),
            thumb: thmb("stump-grinding")
        },
        {
            id:"log2",
            title: "Chipping",
            description: "Chipping branches and small trees",
            src: image("chipping"),
            thumb: thmb("chipping")
        }
    ];
    $scope.hutchImages = [
        {
            id:"hutch0",
            title: "Chicken Hutch",
            description: "Side view of one of our chicken hutches",
            src: image("chicken-pen"),
            thumb: thmb("chicken-pen")
        },
        {
            id:"hutch1",
            title: "Chicken Hutch",
            description: "Full view of chicken hutch",
            src: image("chicken-pen-full"),
            thumb: thmb("chicken-pen-full")
        },
        {
            id:"hutch2",
            title: "In the pen",
            description: "View from inside the chicken pen, complete with doors for easy access",
            src: image("chicken-pen-inside"),
            thumb: thmb("chicken-pen-inside")
        },
        {
            id:"hutch3",
            title: "Inside the hutch",
            description: "Inside the chicken hutch, with perch and egg stalls.",
            src: image("chicken-house-inside"),
            thumb: thmb("chicken-house-inside")
        }];
    $scope.deckImages = [
        {
            id:"deck0",
            title: "Deck - Before",
            description: "Before we constructed the deck",
            src: image("deck-before"),
            thumb: thmb("deck-before")
        },
        {
            id:"deck1",
            title: "Deck - After",
            description: "The finished deck",
            src: image("deck-after"),
            thumb: thmb("deck-after")
        },
        {
            id:"deck2",
            title: "The perfect deck",
            description: "A perfect space for entertaining",
            src: image("deck-full"),
            thumb: thmb("deck-full")
        }
    ];
});