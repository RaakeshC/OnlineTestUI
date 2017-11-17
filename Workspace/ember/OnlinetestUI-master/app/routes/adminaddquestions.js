import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Route.extend({
    model(){
        // console.log(CONFIG);
        // this.controllerFor('addquestion').set('sno', null);
        // this.controllerFor('addquestion').set('question', null);
        // this.controllerFor('addquestion').set('option', null);
        // this.controllerFor('addquestion').set('answer', null);
        // this.controllerFor('addquestion').set('questiontype', null);
        // this.controllerFor('addquestion').set('delete', null);
        console.log("onload function test");
        var mycontroller = this.controllerFor('adminaddquestions');
        
        return Ember.$.ajax({
            url:CONFIG.GOURL +'/fetchquestions',
            type:'GET',
            accepts: 'application/json',
            success: function(Response){
                console.log(Response);
                
              var message = Response.message;
              var status = Response.status;
      
              if(status==='success'){
                console.log(JSON.stringify(Response));
                mycontroller.set('message',Response.message);
              
              } else {
                mycontroller.set('errormessage', "Invalid Credentials");
              }
            }
          });
        
        // return[{
        //     qno: '1',
        //     question:'What is java ?',
        //     choices:'Language',
        //     correctAnswer:'Machine Language',
        //     type:'JAVA'
        // }]
    }
});
