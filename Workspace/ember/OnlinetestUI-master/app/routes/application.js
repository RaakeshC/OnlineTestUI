import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        //to set default page as home101
        this.transitionTo('home101');
    }
});