
// used in the first step when generating all combos of one 64 string and saving to DB

var dbHelper = require('./dbhelper');

module.exports = {

	//to be run against eachother in all possible combinations and analyzed
	originalLetters:{
		border:"ANYVYQXGKSFVPURKHHCZLRNFPNVSZZIYFTPEJZMMUSZDEYRNKZVVTMFTRTNLKHYO",
		middle:"GALRFLFLISUREEIERMVASRIENEEEUUPTOIUTOAETESTUOIAOLCLNTGTPSUHREUCD"
	},

	uniqueLetters:{
		border:"ACDEFGHIJKLMNOPQRSTUVXYZ",
		middle:"ACDEFGHILMNOPRSTUV"
	},

	generateCombos: function(db, callback) {
		//TODO: do the loops
		var arr = [{combo:'ABCDEFGHU'},{combo:'ABCDEFGIO'}];
	    dbHelper.insertArrayOfCombos(db,arr, function(err,res){
	    	callback(err,res);
	    });
	}
};




/*
Use Async lib for saving chunks to db?
https://github.com/caolan/async

/*async.each(items,
  // 2nd param is the function that each item is passed to
  function(item, callback){
    // Call an asynchronous function, often a save() to DB
    item.someAsyncCall(function (){
      // Async call is done, alert via callback
      callback();
    });
  },
  // 3rd param is the function to call when everything's done
  function(err){
    // All tasks are done now
    doSomethingOnceAllAreDone();
  }
); 
*/