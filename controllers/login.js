var express = require('express');
var userModel = require('./../models/employee');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	userModel.validate(user, function(status,type){
	    if (status) {
	        if (type == "customer") {
	            response.cookie('username', request.body.username);
	            response.redirect('/home');
	        }
	        else if(type=="admin") {
	            response.cookie('username', request.body.username);
	            response.redirect('/adminhome');
	        }
		}else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


