import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Controller.extend({
    isShowingModal: false,
    funda: true,

    text: true,
    testlist: ['Fundamental', 'JAVA', 'Language', ],
    actions: {

        //function called on logout button for session logout 

        log_out1: function() {

            console.log(CONFIG.GOURL);
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            var mycontroller = this;
            // var uid;
            var token = sessionStorage.getItem('token');
            return $.ajax({
                url: CONFIG.GOURL + '/logout',
                type: 'GET',
                accepts: 'application/json',
                Authorization: token,
                success: function(response) {
                    console.log(JSON.stringify(response));
                    //uid = response.message;
                    // mycontroller.set('uid',uid);
                    mycontroller.toggleProperty('isShowingModal');
                    mycontroller.set('loading_image_visibility', "hide");
                    mycontroller.transitionToRoute('programming');
                    sessionStorage.setItem('token', null);
                    mycontroller.transitionToRoute('home101');

                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });
        },


        //function call to select test type        
        questionlist: function() {
            var chosen = this.get('selectedtest');
            console.log(chosen);
            

            if (chosen === 'Fundamental') {
                console.log(chosen);
                this.set('errorMessage', "Fundamental Selected");   
            }

            var mycontroller = this;
            if (chosen === null || chosen === undefined) {
                this.set('errorMessage', "Please Select Test");
                return false;
            } else {
                this.set('errorMessage', "");
                this.set('chosenTest', chosen);
                // transition.refresh();
                this.transitionToRoute('programming');
            }
        }
    }
});