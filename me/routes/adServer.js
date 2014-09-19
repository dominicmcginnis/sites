
/*
 * GET Ad slots
 */
exports.get = function(req, res) {
    var template_engine = req.app.settings.template_engine;
    res.locals.session = req.session;
    var gpt = require('../lib/gpt.js');

    console.log('executed');

/*
    res.render('proto2/index', {
        title:'StubHub - Concept # 2',
        homePageUrl : '/concept',
        cssPaths : cssPaths,
        jsFiles : jsFiles,
        headerStyle : 'compact',
        location : 'New York',
        nav : nav,
        sectionsData : sectionsData
    });
*/
};