import Ember from 'ember';

import CONFIG from 'online-test/config/environment';


import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    email: [
        validator('presence', true),
        validator('format', {
            type: 'email'
        })
    ],
});

export default Ember.Controller.extend(Validations, {
    isShowingModal: false,

    actions: {
        //function call on signup button for registration
        register: function() {
            this.transitionToRoute('register');
        },

        //function call on sign in button for login
        login: function() {
            console.log(CONFIG.GOURL);
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            let {
                email,
                password
            } = this.getProperties('email', 'password');

            var dataString = {
                "email": email,
                "password": password,
            };
         
            var mycontroller = this;
            var uid, fname, token, usertype;
            //ajax call for login
            return $.ajax({
                url: CONFIG.GOURL + '/login',
                type: 'POST',
                accepts: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {

                    var message = response.message;
                    var status = response.status;
                    if (status === "success") {
                        console.log(JSON.stringify(response));
                        //storing response into diffrent variable
                        uid = message.uid;
                        fname = message.fname;
                        token = message.token;
                        usertype = message.usertype;

                        sessionStorage.setItem('token', token);

                        //setting varibale into property to show in hbs page
                        mycontroller.set('uid', uid);
                        mycontroller.set('fname', fname);
                        mycontroller.set('token', token);
                        mycontroller.set('usertype', usertype);
                        mycontroller.toggleProperty('isShowingModal');
                        mycontroller.set('loading_image_visibility', "hide");
                        console.log(usertype)
                        if (usertype === "admin") {
                            mycontroller.transitionToRoute('report');
                        } else {
                            mycontroller.transitionToRoute('agreement');
                      
                        }

                    } else {
                        mycontroller.set('token', null);
                        mycontroller.set('errormessage', "Invalid Credentials");
                    }




                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                            mycontroller.toggleProperty('isShowingModal');
                        mycontroller.set('loading_image_visibility', "hide");
                }
                /*
                gotoagreement:function (){
                   this.transitionToRoute('agreement');
                }*/
            });
        }

    }
});