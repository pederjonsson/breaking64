// used for transforming / combining strings with preferred cipher techniques
 
module.exports = { 

	general:{
		alphabetValues: {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,x:23,y:24,z:25},
		alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'] // not using w
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
			
			if(combo > 25){
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
}