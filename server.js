/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3026;

// Requires
var fs = require('fs');
var http = require('http');
var express = require('express');
var config = require('./config.json');
// The Express app
var app = express();
var option = {
  key: fs.readFileSync('server.key'),
  cert: fs.radFileSync('server.cert')
}
var server = https.createServer(options,app);

// Serve files from public folder
app.use(express.static('public'));

var AuthCAS = require('auth-cas');
var auth = new AuthCas(config.Host, Config.casHost);
// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
