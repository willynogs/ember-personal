import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAbout: function () {
      if ($('.added').is(':animated')) {
        setTimeout(function () {
          $('.navigation').append('<a class="added">about</a>');
        }, 150);
      } else {
        $('.navigation').append('<a class="added">about</a>');
      }
    },
    addWork: function () {
      if ($('.added').is(':animated')) {
        setTimeout(function () {
          $('.navigation').append('<a class="added">work</a>');
        }, 150);
      } else {
        $('.navigation').append('<a class="added">work</a>');
      }
    },
    addContact: function () {
      if ($('.added').is(':animated')) {
        setTimeout(function () {
          $('.navigation').append('<a class="added">contact</a>');
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