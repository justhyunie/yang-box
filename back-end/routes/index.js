// EXPRESS SERVER
var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var config = require('../config/config')  //database config uploaded via FTP
var connection = mysql.createConnection(config.db)

connection.connect();
console.log('connected');

function validateKey(key){
	console.log(key)
	return new Promise((resolve, reject)=>{
		connection.query('SELECT * FROM api_keys WHERE api_key="'+key+'"',(error,results)=>{
			console.log(results.length)
			if (error) throw error;
			if(results.length == 0){
				resolve(false);
			}else{
				resolve(true);
			}
		});
	});
}


//CREATE API ROUTES HERE:

/***************************EOM****************************************************** */

router.get('/get/all/eom', function(req, res, next) {

	
	// Removed isKeyValid so get is easier to test.
	// var isKeyValid = validateKey(req.query.api_key);
	// console.log(req.query.api_key)
	// isKeyValid.then((bool)=>{
	// 	if(bool == true){
			connection.query('SELECT * FROM eom', (error, results)=>{
				if (error) throw error;
				res.json(results);
			})
		// }else{
		// 	res.json({msg:"badKey"})
		// }
	// });
});

router.get('/get/eom/:id', (req,res)=>{
	connection.query(`SELECT * FROM eom WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/eom', (req,res)=>{
	console.log(req.body);
	
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.firstname;
	const col_2 = req.body.data.lastname;
	const col_3 = req.body.data.dob;
	const col_4 = req.body.data.email;
	const col_5 = req.body.data.phone;
	const col_6 = req.body.data.address;
	const col_7 = req.body.data.address2;
	const col_8 = req.body.data.city;
	const col_9 = req.body.data.state;
	const col_10 = req.body.data.zip;
	connection.query('INSERT INTO eom \
	(\
		firstname = ?, \
		lastname = ?, \
		dob = ?, \
		email = ?, \
		phone = ?,  \
		address = ?, \
		address2 = ?, \
		city = ?, \
		state = ?, \
		zip = ? \
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
		[col_1, col_2, col_3,col_4,col_5,
			col_6, col_7, col_8,col_9,col_10], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/eom',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.firstname;
	const col_2 = req.body.data.lastname;
	const col_3 = req.body.data.dob;
	const col_4 = req.body.data.email;
	const col_5 = req.body.data.phone;
	const col_6 = req.body.data.address;
	const col_7 = req.body.data.address2;
	const col_8 = req.body.data.city;
	const col_9 = req.body.data.state;
	const col_10 = req.body.data.zip;

	connection.query('UPDATE eom SET \
		firstname = ?, \
		lastname = ?, \
		dob = ?, \
		email = ?, \
		phone = ?,  \
		address = ?, \
		address2 = ?, \
		city = ?, \
		state = ?, \
		zip = ? \
	WHERE id=?',[col_1, col_2, col_3,col_4,col_5,
		col_6, col_7, col_8,col_9,col_10, targetId],(error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/eom', (req,res)=>{
	connection.query('DELETE FROM eom WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});


/***************************EVENT****************************************************** */


router.get('/get/all/event', function(req, res, next) {
			connection.query('SELECT * FROM event', (error, results)=>{
				if (error) throw error;
				res.json(results);
			})
});

router.get('/get/event/:id', (req,res)=>{
	connection.query(`SELECT * FROM event WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/event', (req,res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.event;
	const col_2 = req.body.data.startdate;
	const col_3 = req.body.data.enddate;
	const col_4 = req.body.data.travelstartdate;
	const col_5 = req.body.data.travelenddate;
	const col_6 = req.body.data.staffneeded;
	const col_7 = req.body.data.city;
	const col_8 = req.body.data.state;
	const col_9 = req.body.data.client;
	connection.query('INSERT INTO event \
	(\
		event = ?, \
		startdate = ?, \
		enddate = ?, \
		travelstartdate = ?, \
		travelenddate = ?,  \
		staffneeded = ?, \
		city = ?, \
		state = ?, \
		client = ? \
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
		[col_1, col_2, col_3,col_4,col_5,
			col_6, col_7, col_8,col_9], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/event',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.event;
	const col_2 = req.body.data.startdate;
	const col_3 = req.body.data.enddate;
	const col_4 = req.body.data.travelstartdate;
	const col_5 = req.body.data.travelenddate;
	const col_6 = req.body.data.staffneeded;
	const col_7 = req.body.data.city;
	const col_8 = req.body.data.state;
	const col_9 = req.body.data.client;

	connection.query('UPDATE event SET \
		event = ?, \
		startdate = ?, \
		enddate = ?, \
		travelstartdate = ?, \
		travelenddate = ?,  \
		staffneeded = ?, \
		city = ?, \
		state = ?, \
		client = ? \
	WHERE id=?',[col_1, col_2, col_3,col_4,col_5,
		col_6, col_7, col_8,col_9, targetId],(error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/event', (req,res)=>{
	connection.query('DELETE FROM event WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});

/***************************CONTRACTOR****************************************************** */


router.get('/get/all/contractor', function(req, res, next) {
			connection.query('SELECT * FROM contractor', (error, results)=>{
				if (error) throw error;
				res.json(results);
			})
		
});

router.get('/get/contractor/:id', (req,res)=>{
	connection.query(`SELECT * FROM contractor WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/contractor', (req,res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.firstname;
	const col_2 = req.body.data.lastname;
	const col_3 = req.body.data.dob;
	const col_4 = req.body.data.email;
	const col_5 = req.body.data.phone;
	const col_6 = req.body.data.address;
	const col_7 = req.body.data.address2;
	const col_8 = req.body.data.city;
	const col_9 = req.body.data.state;
	const col_10 = req.body.data.zip;
	connection.query('INSERT INTO contractor \
	(\
		firstname = ?, \
		lastname = ?, \
		dob = ?, \
		email = ?, \
		phone = ?,  \
		address = ?, \
		address2 = ?, \
		city = ?, \
		state = ?, \
		zip = ? \
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
		[col_1, col_2, col_3,col_4,col_5,
			col_6, col_7, col_8,col_9,col_10], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/contractor',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.firstname;
	const col_2 = req.body.data.lastname;
	const col_3 = req.body.data.dob;
	const col_4 = req.body.data.email;
	const col_5 = req.body.data.phone;
	const col_6 = req.body.data.address;
	const col_7 = req.body.data.address2;
	const col_8 = req.body.data.city;
	const col_9 = req.body.data.state;
	const col_10 = req.body.data.zip;
	connection.query('UPDATE contractor SET \
		firstname = ?, \
		lastname = ?, \
		dob = ?, \
		email = ?, \
		phone = ?,  \
		address = ?, \
		address2 = ?, \
		city = ?, \
		state = ?, \
		zip = ? \
	WHERE id=?',
	[col_1, col_2, col_3,col_4,col_5,
		col_6, col_7, col_8,col_9,col_10, targetId],(error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/contractor', (req,res)=>{
	connection.query('DELETE FROM contractor WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});


/***************************POC****************************************************** */


router.get('/get/all/poc', function(req, res, next) {
			connection.query('SELECT * FROM poc', (error, results)=>{
				if (error) throw error;
				res.json(results);
			})

});

router.get('/get/poc/:id', (req,res)=>{
	connection.query(`SELECT * FROM poc WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/poc', (req,res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.firstname;
	const col_2 = req.body.data.lastname;
	const col_3 = req.body.data.email;
	const col_4 = req.body.data.phone;
	connection.query('INSERT INTO poc \
	(\
		firstname = ?, \
		lastname = ?, \
		email = ?, \
		phone = ? \
		) VALUES (?, ?, ?, ?)', [col_1, col_2, col_3,col_4], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/poc',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.firstname;
	const col_2 = req.body.data.lastname;
	const col_3 = req.body.data.email;
	const col_4 = req.body.data.phone;
	connection.query('UPDATE poc SET \
		firstname = ?, \
		lastname = ?, \
		email = ?, \
		phone = ? \
	WHERE id=?',[col_1, col_2, col_3,col_4, targetId],(error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/poc', (req,res)=>{
	connection.query('DELETE FROM poc WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});


/***************************HARDWARE****************************************************** */


router.get('/get/all/hardware', function(req, res, next) {
			connection.query('SELECT * FROM hardware', (error, results)=>{
				if (error) throw error;
				res.json(results);
			})
		
});

router.get('/get/hardware/:id', (req,res)=>{
	connection.query(`SELECT * FROM hardware WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/hardware', (req,res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.name;
	const col_2 = req.body.data.marketprice;
	const col_3 = req.body.data.rentalcostmonthly;
	const col_4 = req.body.data.rentalcostweekly;
	const col_5 = req.body.data.purchasecost;
	const col_6 = req.body.data.purchasedate;
	const col_7 = req.body.data.classcode;
	const col_8 = req.body.data.available;
	const col_9 = req.body.data.notes;
	connection.query('INSERT INTO hardware \
	(\
		name = ?, \
		marketprice = ?, \
		rentalcostmonthly = ?, \
		rentalcostweekly = ?, \
		purchasecost = ?  \
		purchasedate = ?, \
		classcode = ?, \
		available = ?, \
		notes = ? \
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
		[col_1, col_2, col_3,col_4,col_5,
			col_6, col_7, col_8,col_9], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/hardware',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.name;
	const col_2 = req.body.data.marketprice;
	const col_3 = req.body.data.rentalcostmonthly;
	const col_4 = req.body.data.rentalcostweekly;
	const col_5 = req.body.data.purchasecost;
	const col_6 = req.body.data.purchasedate;
	const col_7 = req.body.data.classcode;
	const col_8 = req.body.data.available;
	const col_9 = req.body.data.notes;
	connection.query('UPDATE hardware SET \
		name = ?, \
		marketprice = ?, \
		rentalcostmonthly = ?, \
		rentalcostweekly = ?, \
		purchasecost = ?  \
		purchasedate = ?, \
		classcode = ?, \
		available = ?, \
		notes = ? \
	WHERE id=?',
	[col_1, col_2, col_3,col_4,col_5,
		col_6, col_7, col_8,col_9, targetId],(error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/hardware', (req,res)=>{
	connection.query('DELETE FROM hardware WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});


/***************************HARDWARE REQUEST****************************************************** */

router.get('/get/all/hardware_request', function(req, res, next) {
			connection.query('SELECT * FROM hardware_request', (error, results)=>{
				if (error) throw error;
				res.json(results);
			})
});

router.get('/get/hardware_request/:id', (req,res)=>{
	connection.query(`SELECT * FROM hardware_request WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/hardware_request', (req,res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.ordernumber;
	const col_2 = req.body.data.orderdate;
	const col_3 = req.body.data.shippingdate;
	const col_4 = req.body.data.shipmentarrivaldate;
	const col_5 = req.body.data.tracking;
	const col_6 = req.body.data.classcode;
	const col_7 = req.body.data.status;
	const col_8 = req.body.data.shipmentcost;
	connection.query('INSERT INTO hardware_request \
	(\
		ordernumber = ?, \
		orderdate = ?, \
		shippingdate = ?, \
		shipmentarrivaldate = ?, \
		tracking = ?,  \
		classcode = ?, \
		status = ?, \
		shipmentcost = ? \
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
		[col_1, col_2, col_3,col_4,
			col_5,col_6, col_7, col_8 ], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/hardware_request',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.ordernumber;
	const col_2 = req.body.data.orderdate;
	const col_3 = req.body.data.shippingdate;
	const col_4 = req.body.data.shipmentarrivaldate;
	const col_5 = req.body.data.tracking;
	const col_6 = req.body.data.classcode;
	const col_7 = req.body.data.status;
	const col_8 = req.body.data.shipmentcost;

	connection.query('UPDATE hardware_request SET \
		ordernumber = ?, \
		orderdate = ?, \
		shippingdate = ?, \
		shipmentarrivaldate = ?, \
		tracking = ?,  \
		classcode = ?, \
		status = ?, \
		shipmentcost = ? \
	WHERE id=?',[col_1, col_2, col_3,col_4,col_5,
		 col_6, col_7,col_8, targetId],(error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/hardware_request', (req,res)=>{
	connection.query('DELETE FROM hardware_request WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});

/***************************TODO LIST****************************************************** */



router.get('/get/all/todolist', function(req, res, next) {
	connection.query('SELECT * FROM todolist', (error, results)=>{
		if (error) throw error;
		res.json(results);
	})
});

router.get('/get/todolist/:id', (req,res)=>{
	connection.query(`SELECT * FROM todolist WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/todolist', (req,res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.confirm_poc_details;
	const col_2 = req.body.data.confirm_poc_details_deadline;
	const col_3 = req.body.data.confirm_network_and_power_requirements;
	const col_4 = req.body.data.confirm_network_and_power_requirements_deadline;
	const col_5 = req.body.data.confirm_hardware_request;
	const col_6 = req.body.data.confirm_hardware_request_deadline;
	const col_7 = req.body.data.submit_hardware_request;
	const col_8 = req.body.data.submit_hardware_request_deadline;
	const col_9 = req.body.data.recruit_all_onsitestaff;
	const col_10 = req.body.data.recruit_all_onsitestaff_deadline;
	const col_11 = req.body.data.book_all_travels;
	const col_12 = req.body.data.book_all_travels_deadline;
	const col_13 = req.body.data.confirm_creditcard_authorization;
	const col_14 = req.body.data.confirm_creditcard_authorization_deadline;
	const col_15 = req.body.data.submit_budget_forcast;
	const col_16 = req.body.data.submit_budget_forcast_deadline;
	const col_17 = req.body.data.submit_budget_actual;
	const col_18 = req.body.data.submit_budget_actual_deadline;
	const col_19 = req.body.data.complete_eoa;
	const col_20 = req.body.data.complete_eoa_deadline;
	const col_21 = req.body.data.complete_all_contractor_agreement;
	const col_22 = req.body.data.complete_all_contractor_agreement_deadline;
	const col_23 = req.body.data.create_onsite_slack_channel;
	const col_24 = req.body.data.create_onsite_slack_channel_deadline;
	const col_25 = req.body.data.create_all_logins;
	const col_26 = req.body.data.create_all_logins_deadline;
	const col_27 = req.body.data.complete_ia;
	const col_28 = req.body.data.complete_ia_deadline;
	
	connection.query('INSERT INTO todolist \
	(\
		confirm_poc_details = ?, \
		confirm_poc_details_deadline = ?, \
		confirm_network_and_power_requirements = ?, \
		confirm_network_and_power_requirements_deadline = ?, \
		confirm_hardware_request = ?,  \
		confirm_hardware_request_deadline = ?, \
		submit_hardware_request = ?, \
		submit_hardware_request_deadline = ?, \
		recruit_all_onsitestaff = ?, \
		recruit_all_onsitestaff_deadline = ?, \
		book_all_travels = ?, \
		book_all_travels_deadline = ?, \
		confirm_creditcard_authorization = ?, \
		confirm_creditcard_authorization_deadline = ?, \
		submit_budget_forcast = ?, \
		submit_budget_forcast_deadline = ?, \
		submit_budget_actual = ?, \
		submit_budget_actual_deadline = ?, \
		complete_eoa = ?, \
		complete_eoa_deadline = ?, \
		complete_all_contractor_agreement = ?, \
		complete_all_contractor_agreement_deadline = ?, \
		create_onsite_slack_channel = ?, \
		create_onsite_slack_channel_deadline = ?, \
		create_all_logins = ?, \
		create_all_logins_deadline = ?, \
		complete_ia = ?, \
		complete_ia_deadline = ?, \
		) VALUES ( \
			?, ?, ?, ?, ?, \
			?, ?, ?, ?, ?, \
			?, ?, ?, ?, ?, \
			?, ?, ?, ?, ?, \
			?, ?, ?, ?, ?, \
			?, ?, ? )', 
			[col_1, col_2, col_3,col_4,col_5,
				col_6, col_7, col_8,col_9,col_10,
				col_11, col_12, col_13,col_14,col_15,
				col_16, col_17, col_18,col_19,col_20,
				col_21, col_22, col_23,col_24,col_25,
				col_26, col_27, col_28
			], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/todolist',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.confirm_poc_details;
	const col_2 = req.body.data.confirm_poc_details_deadline;
	const col_3 = req.body.data.confirm_network_and_power_requirements;
	const col_4 = req.body.data.confirm_network_and_power_requirements_deadline;
	const col_5 = req.body.data.confirm_hardware_request;
	const col_6 = req.body.data.confirm_hardware_request_deadline;
	const col_7 = req.body.data.submit_hardware_request;
	const col_8 = req.body.data.submit_hardware_request_deadline;
	const col_9 = req.body.data.recruit_all_onsitestaff;
	const col_10 = req.body.data.recruit_all_onsitestaff_deadline;
	const col_11 = req.body.data.book_all_travels;
	const col_12 = req.body.data.book_all_travels_deadline;
	const col_13 = req.body.data.confirm_creditcard_authorization;
	const col_14 = req.body.data.confirm_creditcard_authorization_deadline;
	const col_15 = req.body.data.submit_budget_forcast;
	const col_16 = req.body.data.submit_budget_forcast_deadline;
	const col_17 = req.body.data.submit_budget_actual;
	const col_18 = req.body.data.submit_budget_actual_deadline;
	const col_19 = req.body.data.complete_eoa;
	const col_20 = req.body.data.complete_eoa_deadline;
	const col_21 = req.body.data.complete_all_contractor_agreement;
	const col_22 = req.body.data.complete_all_contractor_agreement_deadline;
	const col_23 = req.body.data.create_onsite_slack_channel;
	const col_24 = req.body.data.create_onsite_slack_channel_deadline;
	const col_25 = req.body.data.create_all_logins;
	const col_26 = req.body.data.create_all_logins_deadline;
	const col_27 = req.body.data.complete_ia;
	const col_28 = req.body.data.complete_ia_deadline;

	connection.query('UPDATE todolist SET \
	confirm_poc_details = ?, \
		confirm_poc_details_deadline = ?, \
		confirm_network_and_power_requirements = ?, \
		confirm_network_and_power_requirements_deadline = ?, \
		confirm_hardware_request = ?,  \
		confirm_hardware_request_deadline = ?, \
		submit_hardware_request = ?, \
		submit_hardware_request_deadline = ?, \
		recruit_all_onsitestaff = ?, \
		recruit_all_onsitestaff_deadline = ?, \
		book_all_travels = ?, \
		book_all_travels_deadline = ?, \
		confirm_creditcard_authorization = ?, \
		confirm_creditcard_authorization_deadline = ?, \
		submit_budget_forcast = ?, \
		submit_budget_forcast_deadline = ?, \
		submit_budget_actual = ?, \
		submit_budget_actual_deadline = ?, \
		complete_eoa = ?, \
		complete_eoa_deadline = ?, \
		complete_all_contractor_agreement = ?, \
		complete_all_contractor_agreement_deadline = ?, \
		create_onsite_slack_channel = ?, \
		create_onsite_slack_channel_deadline = ?, \
		create_all_logins = ?, \
		create_all_logins_deadline = ?, \
		complete_ia = ?, \
		complete_ia_deadline = ?, \
	WHERE id=?',
	[col_1, col_2, col_3,col_4,col_5,
		col_6, col_7, col_8,col_9,col_10,
		col_11, col_12, col_13,col_14,col_15,
		col_16, col_17, col_18,col_19,col_20,
		col_21, col_22, col_23,col_24,col_25,
		col_26, col_27, col_28, 
		targetId],(error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/todolist', (req,res)=>{
	connection.query('DELETE FROM todolist WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});

/***************************CLIENT INVOICE****************************************************** */

router.get('/get/all/client_invoice', function(req, res, next) {
			connection.query('SELECT * FROM client_invoice', (error, results)=>{
				if (error) throw error;
				res.json(results);
			})
});

router.get('/get/client_invoice/:id', (req,res)=>{
	connection.query(`SELECT * FROM client_invoice WHERE id=${req.params.id}`,(error,results)=>{
		if(results.length == 0){
			res.json({msg:"noResult"})
		}else{
			res.json(results[0])
		}
	});
});

router.post('/add/client_invoice', (req,res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.name;
	const col_2 = req.body.data.invoicedate;
	const col_3 = req.body.data.totalonsitestaffingcost;
	const col_4 = req.body.data.totalhotelcost;
	const col_5 = req.body.data.totalairfarecost;
	const col_6 = req.body.data.totalperdiem;
	const col_7 = req.body.data.totalshippingcost;
	const col_8 = req.body.data.totalrentalcost;
	const col_9 = req.body.data.settled;
	const col_10 = req.body.data.datesettled;
	const col_11 = req.body.data.notes;
	connection.query('INSERT INTO eom \
	(\
		name = ?, \
		invoicedate = ?, \
		totalonsitestaffingcost = ?, \
		totalhotelcost = ?, \
		totalairfarecost = ?, \
		totalperdiem = ?, \
		totalshippingcost = ?, \
		totalrentalcost = ?, \
		settled = ?, \
		datesettled = ?, \
		note = ? \
		) VALUES \
		 (?, ?, ?, ?, ?, \
			?, ?, ?, ?, ?, ?)', 
			[col_1, col_2, col_3,col_4,col_5,
				col_6, col_7,col_8, col_9, col_10,
				 col_11], (error, results)=>{
		if (error){
			res.json(error)
		}else{
			res.json({
				msg: "success"
			});
		}	
	})
});

router.post('/update/client_invoice',(req, res)=>{
	const targetId = req.body.data.id;  //see front end
	const col_1 = req.body.data.name;
	const col_2 = req.body.data.invoicedate;
	const col_3 = req.body.data.totalonsitestaffingcost;
	const col_4 = req.body.data.totalhotelcost;
	const col_5 = req.body.data.totalairfarecost;
	const col_6 = req.body.data.totalperdiem;
	const col_7 = req.body.data.totalshippingcost;
	const col_8 = req.body.data.totalrentalcost;
	const col_9 = req.body.data.settled;
	const col_10 = req.body.data.datesettled;
	const col_11 = req.body.data.notes;

	connection.query('UPDATE client_invoice SET \
	name = ?, \
		invoicedate = ?, \
		totalonsitestaffingcost = ?, \
		totalhotelcost = ?, \
		totalairfarecost = ?, \
		totalperdiem = ?, \
		totalshippingcost = ?, \
		totalrentalcost = ?, \
		settled = ?, \
		datesettled = ?, \
		note = ? \
	WHERE id=?',
	[col_1, col_2, col_3,col_4,col_5,
		col_6, col_7,col_8, col_9, col_10,
		 col_11, targetId],
		 (error, results, fields)=>{
		console.log(results)
		if(error){
			res.json({
				msg: "error",
				error: error
			})
		}else{
			res.json({
				msg: "updated"
			});
		}
	})	
});

router.post('/delete/client_invoice', (req,res)=>{
	connection.query('DELETE FROM client_invoice WHERE id = '+req.body.id,(error, results)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	});
});



/***************************JUCTION TABLES****************************************************** */




/***************************EXMAPLE ROUTES****************************************************** */

router.post('/completeTask',(req, res)=>{
	var targetId = req.body.targetId;
	connection.query('UPDATE tasks SET finished = NOT finished WHERE id=?',[targetId],(error, results, fields)=>{
		if(error){
			res.json(error);
		}else{
			res.json({
				msg: "success"
			});
		}
	})
});



module.exports = router;
