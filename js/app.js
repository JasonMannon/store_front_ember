var Store = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//Controllers
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


//End Controllers

//Router
Store.Router.map(function() {
  this.route('about', { path: '/aboutus' });
  this.resource('products', function() {
    this.resource('product', { path: '/:title' });
  });
  this.resource('contacts');
  this.resource('contact', { path: '/contacts/:name' });
});

Store.Router.map(function() {
  this.route('credits', { path: '/thanks' });
});
//End Router

//Routes
Store.ProductsRoute = Ember.Route.extend({
  model: function() {
    return Store.PRODUCTS;
  }
});

Store.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return Store.PRODUCTS.findBy('title', params.title);
  }
});

Store.ContactsRoute = Ember.Route.extend({
  model: function() {
    return Store.CONTACTS;
  }
});

Store.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return App.CONTACTS.findBy('name', params.name);
  }
});
//End Routes

//Fixtures
Store.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: "Flint is...",
    isOnSale: true,
    image: 'images/flint.jpg'
  },
  {
    title: 'Kindling',
    price: 249,
    description: 'Easily..',
    isOnSale: false,
    image: 'images/kindling.jpg'
  }
];

Store.CONTACTS = [
  {
    name: 'Giamia',
    about: 'Although Giamia came from a humble spark of lightning, he quickly grew to be a great craftsman, providing all the warming instruments needed by those close to him.',
    avatar: 'images/contacts/adam.jpg'
  },
  {
    name: 'Anostagia',
    about: 'Knowing there was a need for it, Anostagia drew on her experience and spearheaded the Flint & Flame storefront. In addition to coding the site, she also creates a few products available in the store.',
    avatar: 'images/contacts/patty.jpg'
  }
];
//End Fixtures



