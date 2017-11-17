import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
       //fuction for login button
        Log_in:function(){

            this.transitionToRoute('home');

}
     },

});
