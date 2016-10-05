
$('.spinner_container').animate({'opacity':0},1000,'linear',function(el)
    {
    $(this).remove();
    });



angular.module('app',['ui.bootstrap','ui.router'])
	.config(require('./routes.js'))


	.directive('fileTree',require('./directives/tree.js'))

