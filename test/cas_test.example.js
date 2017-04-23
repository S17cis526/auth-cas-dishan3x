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
