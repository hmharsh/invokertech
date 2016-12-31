var express = require('express');
var router = express.Router();
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient
/*var url = 'mongodb://127.0.0.1:27017/invokertech';*/
var url = 'mongodb://it:it@ds151028.mlab.com:51028/invokertech';
/* GET home page. */
router.get('/', function(req, res, next) {
 res.send("index.html");
});
router.get('/userone', function(req, res, next) {
 res.redirect("/userone.html");
});
router.get('/usertwo', function(req, res, next) {
 res.redirect("/usertwo.html");
});
router.get('/usertwoIL', function(req, res, next) {
 res.redirect("/usertwoIL.html");
});
router.get('/usertwoDL', function(req, res, next) {
 res.redirect("/usertwoDL.html");
});
router.get('/usertwoUL', function(req, res, next) {
 res.redirect("/usertwoUL.html");
});
router.get('/usertwoVL', function(req, res, next) {
 res.redirect("/usertwoVL.html");
});
router.get('/usertwoIS', function(req, res, next) {
 res.redirect("/usertwoIS.html");
});
router.get('/usertwoDS', function(req, res, next) {
 res.redirect("/usertwoDS.html");
});
router.get('/usertwoUS', function(req, res, next) {
 res.redirect("/usertwoUS.html");
});
router.get('/usertwoVS', function(req, res, next) {
 res.redirect("/usertwoVS.html");
});
router.post('/location', function(req, res, next) {
//adding location into database
console.log(req.body.city_id);
	MongoClient.connect(url,function(err,db){
		assert.equal(err,null);
		var collcetion = db.collection('location');
		
		collcetion.insertOne({'city_id': req.body.city_id,'city_name':req.body.city_name,'zip_code':req.body.zip_code,'city_status':req.body.city_status},function(err,res){
			assert.equal(err,null);
				console.log('Inserted document successfully!!'+res);
				db.close();
		});
	});
	res.redirect('back');
});


router.post('/updatelocation', function(req, res, next) {
//adding location into database
MongoClient.connect(url,function(err,db){
    assert.equal(err,null);
    var collection = db.collection('location');
  collection.updateOne ({'city_id':req.body.city_id}
    , { $set: {'city_name':req.body.city_name,'zip_code':req.body.zip_code,'city_status':req.body.city_status} }, null, function(err, result) {

    assert.equal(err, null);
    console.log("Updated the document ");
  
  });
});
res.redirect('back');
});




router.post('/deletelocation', function(req, res, next) {
//adding location into database
MongoClient.connect(url,function(err,db){
	assert.equal(err,null);
	var collcetion = db.collection('location');
	collcetion.deleteOne({'city_id':req.body.city_id}, function(err, result) {
    assert.equal(err, null);
    console.log("Removed the document " );
    
  });
	
});
res.redirect('back');
});







router.get('/viewlocation', function(req, res, next) {

MongoClient.connect(url,function(err,db){
	assert.equal(err,null);
	var collection = db.collection('location');
	collection.find({}).toArray(function(err,docs){
	assert.equal(err,null);
	res.send(docs);
    db.close();
	});	
});
});

router.post('/service', function(req, res, next) {
//adding location into database
console.log(req.body.city_id);
	MongoClient.connect(url,function(err,db){
		assert.equal(err,null);
		var collcetion = db.collection('service');
		
		collcetion.insertOne({'service_id': req.body.service_id,'service_name':req.body.service_name,'service_price':req.body.service_price,'service_status':req.body.service_status,'amc_availability':req.body.amc_availability},function(err,res){
			assert.equal(err,null);
				console.log('Inserted document successfully!!'+res);
				db.close();
		});
	});
	res.redirect('back');
});




router.post('/updateservice', function(req, res, next) {
//adding location into database
MongoClient.connect(url,function(err,db){
    assert.equal(err,null);
    var collection = db.collection('service');
  collection.updateOne ({'service_id':req.body.service_id}
    , { $set: {'service_name':req.body.service_name,'service_price':req.body.service_price,'service_status':req.body.service_status,'amc_availability':req.body.amc_availability} }, null, function(err, result) {

    assert.equal(err, null);
    console.log("Updated the document ");
  
  });
});
res.redirect('back');
});




router.post('/deleteservice', function(req, res, next) {
//adding location into database
MongoClient.connect(url,function(err,db){
	assert.equal(err,null);
	var collcetion = db.collection('service');
	collcetion.deleteOne({'service_id':req.body.service_id}, function(err, result) {
    assert.equal(err, null);
    console.log("Removed the document " );
    
  });
	
});
res.redirect('back');
});







router.get('/viewservice', function(req, res, next) {

MongoClient.connect(url,function(err,db){
	assert.equal(err,null);
	var collection = db.collection('service');
	collection.find({}).toArray(function(err,docs){
	assert.equal(err,null);
	res.send(docs);
    db.close();
	});	
});
});





module.exports = router;
