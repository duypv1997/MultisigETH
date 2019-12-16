module.exports = function(app) {
  let productsCtrl = require('./controllers/controller');

  // todoList Routes
  app.route('/owners')
    .get(productsCtrl.owners)

  app.route('/submit/:addressDesitation/:fromAddress/:amout')
    .get(productsCtrl.submit)

  app.route('/require')
    .get(productsCtrl.require)

  app.route('/confirm/:fromAddress/:id')
    .get(productsCtrl.confirm)

  app.route('/getconfirm/:id')
    .get(productsCtrl.getconfirm)

  app.route('/getcountconfirm/:id')
    .get(productsCtrl.getcountconfirm)

    
};