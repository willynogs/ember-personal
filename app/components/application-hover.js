import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAbout: function () {
      if ($('.added').length > 0) {
        setTimeout(function () {
          if ($('.added').length > 0) {
            $('.added').remove();
          }
          if ($('.about').is(':hover')) {
            $('.navigation').append('<a class="added">about</a>');
          }
        }, 150);
      } else {
        $('.navigation').append('<a class="added">about</a>');
      }
    },
    addWork: function () {
      if ($('.added').length > 0) {
        setTimeout(function () {
          if ($('.added').length > 0) {
            $('.added').remove();
          }
          if ($('.work').is(':hover')) {
            $('.navigation').append('<a class="added">work</a>');
          }
        }, 150);
      } else {
        $('.navigation').append('<a class="added">work</a>');
      }
    },
    addContact: function () {
      if ($('.added').length > 0) {
        setTimeout(function () {
          if ($('.added').length > 0) {
            $('.added').remove();
          }
          if ($('.contact').is(':hover')) {
            $('.navigation').append('<a class="added">contact</a>');
          }
        }, 150);
      } else {
        $('.navigation').append('<a class="added">contact</a>');
      }
    },
    fall: function () {
      $('.added').animate({
        opacity: 0.0,
        top: "+=10"
      }, 150, function () {
        $('.added').remove();
      });
    }
  }
});