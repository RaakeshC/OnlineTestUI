import Ember from 'ember';

export default Ember.Controller.extend({
  
columns: [
  {
    "propertyName": "uid",
    "title": "Uid"
  },
  {
    "propertyName": "fname",
    "title": "Fname"
  },
  {
    "propertyName": "lname",
    "title": "Lname"
  },
  {
    "propertyName": "java",
    "title": "Java"
  },
  {
    "propertyName": "fundamental",
    "title": "Fundamental"
  },
  {
    "propertyName": "language",
    "title": "Language"
  },
  
],

 actions: {

       /* log_out1 : function(){
             sessionStorage.setItem('token', null);
           this.transitionToRoute('home');
           
        },*/
        
        log_out1: function() {

            //console.log(CONFIG.GOURL);
            //this.toggleProperty('isShowingModal');
            //this.set('loading_image_visibility', "show");
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
                  //  mycontroller.toggleProperty('isShowingModal');
                    //mycontroller.set('loading_image_visibility', "hide");
                    mycontroller.transitionToRoute('programming');
                    sessionStorage.setItem('token', null);
                    mycontroller.transitionToRoute('home101');

                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });
        },
        Adminaddquestion:function(){  
          this.transitionToRoute('adminaddquestions');
        }
 }
 

/*actions: {

  reportCard : function() {

           let {
                 uid,
                fname,
                lname,
                java,
                fundamental,
                language
            } = this.getProperties('uid','fname', 'lname', 'java', 'fundamental','language');

      

           var dataStringq = [{"uid":uid,
                  "fname":fname, 
                  "lname":lname,
                  "java":java,
                  "fundamental":fundamental,
                  "language":language,
                  }]

      
           
   /*return $.ajax({
                    url: CONFIG.GOURL+'/mockadmin',
                    type: 'GET',
                    accepts: 'application/json',
                    data: JSON.stringify(dataStringq),
                    success: function(dataStringq) {
                        //alert("success"+JSON.stringify(data))
                        console.log(JSON.stringify(dataStringq))                     
                        return dataStringq,
                        console.log('DEBUG: GET Enquiries OK');
                          
                    },
                    error: function(err) {
                        console.log(dataStringq)
                        alert(err)
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
  }    
            
}*/

});