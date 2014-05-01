var Store = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Store.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/logo.png',
  time: function() {
    return (new Date()).toDateString()
  }.property()
});

Store.AboutController = Ember.Controller.extend({
  contactName: "Jason",
  avatar: 'images/avatar.jpg',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});

Store.Router.map(function() {
  this.route('about', { path: '/aboutus' });
});

Store.Router.map(function() {
  this.route('credits', { path: '/thanks' });
});
