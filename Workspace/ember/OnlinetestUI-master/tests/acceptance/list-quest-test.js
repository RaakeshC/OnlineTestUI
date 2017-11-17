import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list quest');


/*test('visiting /list-quest', function(assert) {
test('visiting /', function(assert) {
  visit('/list-quest');
 visit('/');


  andThen(function() {
    assert.equal(currentURL(), '/list-quest');
    assert.equal(currentURL(), '/');
  });
});
});*/

test('should show home101 as the default page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/home101','should redirect automatically');
  });

});


test('should link to home page for login.', function (assert) {
  visit('/');
  console.log("before");
  click('#LogInbutton');
    console.log("after");
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect  to home page  after clicking log in button.');
  });

});

test('should enter emailid and password in login page.', function (assert) {
   visit('/');
   click('#LogInbutton');
   fillIn('#emailInput','test@1.com');
   find("#emailInput").change();
 /*fillIn('#passwordInput',123);
 find("#passwordInput',").change();*/
   click('#SignInbutton');
   andThen(function() {
    assert.equal(find("#emailInput").val(),'test@1.com');
     //assert.equal(find("#passwordInput").val(),123);
       assert.equal(currentURL(), '/home','should enter emailid and password ');
  });

});


test('should link to agreement page.', function (assert) {
  visit('/');
  click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect to home page after clicking log in button.');
  });
   
  fillIn('#emailInput','test@1.com');
  find("#emailInput").change();
  fillIn('#passwordInput','123');
  find("#passwordInput").change();
  click('#SignInbutton');
  andThen(function() {
    assert.equal(find("#email").val(),'test@1.com');
    assert.equal(find("#passwordInput").val(),'123');
    assert.equal(currentURL(), '/agreement','should redirect after clicking sigin in button');
  });

});

test('should link to register  page .', function (assert) {
    visit('/');
    click('#LogInbutton');
    andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  });
    click('#SignUpbutton');
     andThen(function() {
       assert.equal(currentURL(), '/register','should redirect after clicking signsup button.');
  });
});

test('should link to home page again from register page .', function (assert) {
  visit('/');
   //console.log("sign up button");
   click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  })
  click('#SignUpbutton');
  andThen(function() {
    assert.equal(currentURL(), '/register','should redirect after clicking sign up button');
  })
//  click('#Submitregister');
  fillIn('#fnameInput','rakesh');
  find("#fnameInput").change();
 
  fillIn('#lnameInput','bharati');
  find("#lnameInput").change();

  fillIn('#phoneInput','1234567890');
  find("#phoneInput").change();

  fillIn('#emailInput','test@1.com');
  find("#emailInput").change();

  fillIn('#passwordInput','123');
  find("#passwordInput").change();  

  fillIn('#repasswordInput','123');
  find("#repasswordInput").change();  
  //console.log("0");
  click('#Submitregister');
  //console.log("0.5");
  andThen(function() {
    //console.log("1");
     assert.equal(find("#fnameInput").val(),'rakesh');
     assert.equal(find("#lnameInput").val(),'bharati');
     assert.equal(find("#phoneInput").val(),'1234567890');
     assert.equal(find("#emailInput").val(),'test@1.com');
     assert.equal(find("#passwordInput").val(),'123');
     assert.equal(find("#repasswordInput").val(),'123');
  
//console.log("2");
     assert.equal(currentURL(), '/home','should redirect after clicking submit button.');
//console.log("3");  
});

});



test('should link to test page.', function (assert) {
 visit('/');
 
   click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  });
    
    click('#SignInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/agreement','should redirect after clicking sign in button');
  });
  click('#Inputcheckbox');
  click('#agreebutton');
  andThen(function() {
    assert.equal(currentURL(), '/test','should redirect after clicking log in button.');
  });

});


