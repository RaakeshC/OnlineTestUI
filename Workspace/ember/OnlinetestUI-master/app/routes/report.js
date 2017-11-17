import Ember from 'ember';
import CONFIG from 'online-test/config/environment';
export default Ember.Route.extend({

    model(){
  return[{
      uid: '101',
      fname:'sai',
      lname:'vinay',
      java:'23',
      language:'8',
      fundamental:'8',
     
  },
  {
      uid:'102',
      fname:'ganesh',
      lname:'kumar',
      java:'22',
      language:'7',
      fundamental:'9',
  },
  {
      uid:'103',
      fname:'sailaja',
      lname:'palaavi',
      java:'24',
      language:'5',
      fundamental:'7',
  },
  {
      uid:'104',
      fname:'mani',
      lname:'kumar',
      java:'21',
      language:'6',
      fundamental:'9',
  },
  {
      uid:'105',
      fname:'ram ',
      lname:'meher',
      java:'24',
      language:'7',
      fundamental:'8',
  },
  {
      uid:'106',
      fname:'raj',
      lname:'kumar',
      java:'23',
      language:'7',
      fundamental:'9',
  },
  {
      uid:'107',
      fname:'shashank',
      lname:'jain',
      java:'23',
      language:'6',
      fundamental:'9',
  },
  {
      uid:'108',
      fname:'gitam',
      lname:'raja',
      java:'21',
      language:'7',
      fundamental:'9',
  },
  {
      uid:'109',
      fname:'rakesh',
      lname:'bharathi',
      java:'20',
      language:'6',
      fundamental:'8',
  },
  {
      uid:'110',
      fname:'sweta',
      lname:'vahia',
      java:'21',
      language:'6',
      fundamental:'8',
  },
  {
      uid:'111',
      fname:'sai',
      lname:'pritam',
      java:'20',
      language:'7',
      fundamental:'7',
  },
  {
      uid:'112',
      fname:'arun',
      lname:'mani',
      java:'24',
      language:'6',
      fundamental:'9',
  },
  {
      uid:'113',
      fname:'rishab',
      lname:'sharma',
      java:'25',
      language:'7',
      fundamental:'8',

  }]
  

       
     /*var data = [{"uid":uid,
                  "fname":fname, 
                  "java":javascore,
                  "language":languagescore,
                  "fundamental":fundamentalscore}]
                  

       var  xyz = [{"uid":"1","fname":"Sweta","java":"20",language:"8","fundamental":"4"},
       {"uid":"2","fname":"uma","java":"20",language:"8","fundamental":"4"},
       {"uid":"3","fname":"Rakesh","java":"20",language:"8","fundamental":"4"}
       ];
        //return xyz;
         // message.model;
         
 /*  return $.ajax({
                    url: CONFIG.GOURL+'/mockadmin',
                    type: 'GET',
                    accepts: 'application/json',
                    success: function(xyz) {
                        //alert("success"+JSON.stringify(data))
                 
                       console.log(JSON.stringify(xyz));
    console.log('DEBUG: GET Enquiries OK');
     return  xyz ;
                    },
                    error: function(data) {
                        console.log(data)
                        //alert(err)
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
               }*/
  } 
});
