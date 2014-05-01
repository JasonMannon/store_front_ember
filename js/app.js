var Store = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Store.Router.map(function() {
  this.route('about', { path: '/aboutus' });
});

Store.Router.map(function() {
  this.route('credits');
});
