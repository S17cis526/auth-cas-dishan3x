var assert = require('assert');
var authCas = require('./lab/auth-cas');

it('A CAS host must be  specified', function(){
    assert.throws(
      () => {
        new authCas();
      },/CAS Host must be suppliesd/
      assert.throws(
        ()=>{
          new authCas(undefined);
        },/CAS HOST must be supplied/
      );
    );
});

it('A CAS host mustbe specified',funciton(){
  assert.throws(
    () => {
      new authCAS('https://cashost.com')},
      "A CAS Host must be specified"
    }
  )
});

it('visitoing  the login pafe shoul direct to the CAS server login', funciton {
  http.get(config.host+'/login',function(res){
    assert.equals(res.status)
    assert.equal(locatio n)
  })
});
