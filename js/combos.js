
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

var dbHelper = require('./dbhelper');

module.exports = {

	frequencySettings: {
		lettersNotAllowed:['k','y','w']
	},

	//to be run against eachother in all possible combinations and analyzed
	originalLetters:{
		border:"ANYVYQXGKSFVPURKHHCZLRNFPNVSZZIYFTPEJZMMUSZDEYRNKZVVTMFTRTNLKHYO",
		middle:"GALRFLFLISUREEIERMVASRIENEEEUUPTOIUTOAETESTUOIAOLCLNTGTPSUHREUCD"
	},

	generateCombos: function(db, callback) {
		//TODO: do the loops
		var arr = [{combo:'ABCDEFGHU'},{combo:'ABCDEFGIO'}];
	    dbHelper.insertArrayOfCombos(db,arr, function(err,res){
	    	callback(err,res);
	    });
	}
};




