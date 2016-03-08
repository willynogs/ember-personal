import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAbout: function () {
      $('.navigation').append('<a class="added">about</a>');
    },
    addWork: function () {
      $('.navigation').append('<a class="added">work</a>');
    },
    addContact: function () {
      $('.navigation').append('<a class="added">contact</a>');
    },
    remove: function () {
      $('.added').remove();
    }
  }
});