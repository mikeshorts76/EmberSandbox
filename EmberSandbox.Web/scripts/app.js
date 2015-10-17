App = Ember.Application.create();

//App.Store = DS.Store.extend({
//	revision: 1,
//	adapter: 'DS.FixtureAdapter'
//})

App.Router.map(function () {
	this.route('about');
	this.route('posts');
})

//App.Post = DS.Model.extend({
//	title: DS.attr('string'),
//	author: DS.attr('string'),
//	intro: DS.attr('string'),
//	extended: DS.attr('string'),
//	publishedAt: DS.attr('date')
//});




