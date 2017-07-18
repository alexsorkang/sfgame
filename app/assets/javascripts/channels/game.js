// app/assets/javascripts/channels/messages.js

App.game = App.cable.subscriptions.create('GameChannel', {  
  received: function(data) {
    $("#game").removeClass('hidden')
    return $('#game').append(this.renderUser(data));
  },

  renderUser: function(data) {
    return "<p> <b>" + data.name + "</b> </p>";
  }
});