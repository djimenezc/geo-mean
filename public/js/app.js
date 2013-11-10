window.app = angular.module('mean', [ 'ngCookies', 'ngResource',
		'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles',
		'mean.mapComponentsApp' ]);

angular.module('mean.system', []);
angular.module('mean.articles', []);