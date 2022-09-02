class SiteController {
    // [GET] / search
    // để là home thay index cũng được.
    index(req, res) {
        res.render('home');
    }

    // [GET] /search/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
