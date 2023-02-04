const adminRoute = require('./admin');
const clientRoute = require('./client');

function route(app) {
    app.use('/admin', adminRoute);
    app.use('/', clientRoute);
}

module.exports = route;
