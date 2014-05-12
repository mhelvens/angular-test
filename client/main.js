'use strict';


//// Logging several application phases

console.info('Starting main.js...');


//// RequireJS Configuration

requirejs.config({
	paths: {
		'es5-shim': 'lib/es5-shim/es5-shim',
		'es6-shim': 'lib/es6-shim/es6-shim',
		'domReady': 'lib/requirejs-domready/domReady',
		'angular':  'lib/angular/angular',
		'jquery':   'lib/jquery/dist/jquery'
	},
	shim:  {
		'angular':  { exports: 'angular', deps: ['jquery'] },
		'jquery':   { exports: '$' },
		'es6-shim': ['es5-shim']
	}
});


//// First, load ES6 shims (and, implicitly, ES5 shims).

require(['es6-shim'], function () {

	//// then bootstrap the Angular application

	console.info('Bootstrapping Angular...');
	require(['app/bootstrap'], function () {
		console.info('Angular bootstrapped.');
	});

});
