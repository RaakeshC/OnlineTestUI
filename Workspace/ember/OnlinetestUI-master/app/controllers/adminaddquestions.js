import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Controller.extend({

    columns: [
        {
          "propertyName": "qno",
          "title": "S.no"
        },
        {
          "propertyName": "question",
          "title": "Question"
        },
        {
          "propertyName": "choices",
          "title": "Option"
        },
        {
          "propertyName": "correctAnswer",
          "title": "Answer"
        },
        {
          "propertyName": "type",
          "title": "Question Type"
        }
      ],
    testlist: ['Fundamental', 'JAVA', 'Language' ],
      
   actions: {
       //fuction for login button
       Adminaddquestion:function(){
            this.transitionToRoute('adminaddquestions');
       },
    
       questionlist: function() {
        var chosen = this.get('selectedtest');
        console.log(chosen);

        var selectedrows = this.get("clickrows");
        console.log("row click test", selectedrows);

        console.log(CONFIG.GOURL);
        this.toggleProperty('isShowingModal');
        this.set('loading_image_visibility', "show");
        let {
          question,
            option1,
            option2,
            option3,
            option4,
            answers,
        } = this.getProperties('question', 'option1','option2','option3','option4','answers');
        
        var dataString = {
          "question": "what is java? explain detail?",
          "choices": [option1,option2,option3,option4],
          "correctAnswer": answers,
          "type": chosen
      };
        console.log(dataString);
        var mycontroller = this;
        var uid, fname, token, usertype;
        return $.ajax({
          url:CONFIG.GOURL +'/adminaddquestions',
          type:'post',
          accepts: 'application/json',
          data: JSON.stringify(dataString),
          success: function(Response){
            var message = Response.message;
            var status = Response.status;
            console.log(Response);
    
            if(status==='success'){
              console.log(JSON.stringify(Response));
              mycontroller.set('message',Response.message);
            
            } else {
              mycontroller.set('token', null);
              mycontroller.set('errormessage', "Invalid Credentials");
            }
          }
        });
      }
    },
});