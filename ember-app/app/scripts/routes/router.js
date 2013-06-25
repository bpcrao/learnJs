App.Router.map(function(){
    this.route('about');

    this.resource('company', function(){
        this.route('contact');
        this.route('team');
    });

});

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});

App.AboutRoute = Em.Route.extend({
    model: function() {
        return App.Fixtures.Org;
    }
});

App.CompanyTeamRoute = Em.Route.extend({
    renderTemplate: function(controller, model){
        // Render the base template
        this._super(controller, model);
        // Render the bios template into the sidebar
        this.render('bios', {outlet: 'sidebar'});
    }
});
