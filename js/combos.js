
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

	general:{
		alphabetValues: {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,x:23,y:24,z:25},
		alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'] // not using w
	},

	frequencySettings: {
		maxUniqueLetters:21,
		french:{
			a:9.42,
			b:1.02,
			c:2.64,
			d:3.39,
			e:15.87,
			f:0.95,
			g:1.04,
			h:0.77,
			i:8.41,
			j:0.89,
			k:0.0,
			l:5.34,
			m:3.24,
			n:7.15,
			o:5.14,
			p:2.86,
			q:1.06,
			r:6.46,
			s:7.90,
			t:7.26,
			u:6.24,
			v:2.15,
			x:0.30,
			y:0.24,
			z:0.32
		}
	},

	wordSettings:{
		lettersNotAllowed:['k','y','w']
	},

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
	},

	//for combining two 64 strings with gematria
	combineWithGematria: function(first64arr, second64arr){
		var combinedArrToReturn = [];

		for(var i = 0; i < first64arr.length; i++){
			var let1 = first64arr[i].toLowerCase();
			var let2 = second64arr[i].toLowerCase();
			var letterValue1 = this.general.alphabetValues[let1];
			var letterValue2 = this.general.alphabetValues[let2];
			var finalvalue;
			var combo = letterValue1 + letterValue2;
			
			if(combo <= 0){
				finalvalue = 25 - (combo * -1); 
			}
			else if(combo > 25){
				var reduced = 50 - combo;
				finalvalue = 25 - reduced;
			}
			else{
				finalvalue = combo;
			}

			combinedArrToReturn.push(this.config.alphabet[finalvalue-1]);
		}
		return combinedArrToReturn;
	}
};




