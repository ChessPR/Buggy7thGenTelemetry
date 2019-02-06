module.exports = function(app) {
  var data = require('../controllers/dataController');

//methods get called depending on request type and url
// localhost:3000/api
  app.route('/api/data')
    .get(data.getAll)
    .post(data.addData);

  app.route('/api/data/:id')
    .get(data.getId)
    .delete(data.removeId)
    .put(data.updateId);
}
