//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++
var path = require('path');

module.exports = function(app){

    ///Basic route that sends the user first to the AJAX page
        app.get('/', function (req, res){

            res.sendFile(path.join(__dirname + '/../public/index.html'));
        
        })//end of route index.html page

    ///Sends user to survey page
        app.get('/survey', function(req, res){

            res.sendFile(path.join(__dirname + '/../public/survey.html'));
    
        })//end of route to survey page

};//end of function