module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Inicie sesión para ver ese recurso');
    res.redirect('/users/login');
  },
  isLoggedin : function(req, res, next){
    res.locals.login = req.isAuthenticated();
    next();
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');      
  }
};
