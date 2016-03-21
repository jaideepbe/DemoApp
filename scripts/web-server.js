/*below require call grabs the express library and makes it available for us
    inside of this file
 */
var express = require('express');

//get path library
var path = require('path');

//create express application by calling express function
var app = express();

/*creating root path variable by calling path.normalize and then pass into that
 underscore underscore dirname(variable that points current directory)
 i.e., scripts directory add that to /../ to point to base directory
*/
var rootpath = path.normalize(__dirname + '/../');

/* tell express to server up pages using app.use calling express.static
    The static function serves the pages in a given directory without processing them at all
    and provide the rootpath and app directory */
app.use(express.static(rootpath + '/app'));

//tell app to listen to the below port number
app.listen(8080);

console.log('Listening on port 8080...');
