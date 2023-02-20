const blogRoute = require('./blogRoutes');

function route(app) {
    app.use('/', blogRoute);
}

module.exports = route;
