App = Ember.Application.create({
	rootElement : "#github-app"
});

App.IndexRoute = Ember.Route.extend({
  	model : function() {
  		return [
  			"Rob Conery",
  			"Scott Hanselman",
  			"Tom Dale",
  			"Yehuda Katz",
  			"Jon Galloway",
  			"Phil Haack"
  		];
  	}  
});

App.IndexController = Ember.ArrayController.extend({
	renderedOn: function() {
		return new Date();
	}.property
})

