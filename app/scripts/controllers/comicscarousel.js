(function() {

    'use strict';
    
    var app = angular.module('projectApp');
    
    app.controller('ComicsCarouselController', ['selectedSourceValue', function(selectedSourceValue, ComicImage) {
        console.log('ComicsCarouselController loaded.');

        var vm = this;

        var comic = selectedSourceValue.selectedSource;
        
        vm.comic = comic;

        comic._date = moment().subtract(1, 'days');
        
        comic.getImageUrl = function() {
            return 'http://viva-pablo.codio.io:3000/comicimage/' + this._id + '/' + this._date.format('YYYYMMDD');
        };

        comic.getDateToShow = function() {
            return moment(this._date).format('LL');
        };
        
        comic.next = function() {
            console.log('next called');
            this._date = this._date.add(1, 'days');
        };
        
        comic.previous = function() {
            comic._date = comic._date.subtract(1, 'days');
        };
        
        vm.hideImage = function() {
            console.log('could not show image');
        };
        
    }]);
})();
