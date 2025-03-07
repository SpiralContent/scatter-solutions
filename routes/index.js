var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/knowledge/:category?', routes.views.knowledge);
	app.get('/knowledge/post/:post', routes.views.post);
        app.get('/advertisers', routes.views.advertisers);
        app.get('/publishers', routes.views.publishers);
	app.all('/contact', routes.views.contact);
	
};
