import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Route.extend({
    model() {
       // console.log(CONFIG);
       //set all input field empty at time of page loaded
        this.controllerFor('register').set('loading_image_visibility', 'hide');
        this.controllerFor('register').set('fname', null);
        this.controllerFor('register').set('lname', null);
        this.controllerFor('register').set('phone', null);
        this.controllerFor('register').set('email', null);
        this.controllerFor('register').set('password', null);
        this.controllerFor('register').set('confirmpassword', null);
       
    }
});