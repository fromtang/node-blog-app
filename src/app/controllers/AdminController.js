class AdminController {
    // [GET] /admin
    admin_home(req, res) {
        res.render('admin-home');
    }
}

module.exports = new AdminController();
