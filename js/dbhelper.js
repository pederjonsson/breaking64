module.exports = {

	settings:{
		tableCombos: 'combos', // for storing all combos of the first 64 string
		tableFreq: 'combosbyfreq', // for storing combos that has good frequencys
		tableWords: 'combosbywords' // for storing combos that has a certain amount of word matches
	},

	//the array must have objects ex: {combo:'ABCDEFGHIJKLMN'}
	insertArrayOfCombos: function (db, arr, callback) {
		db.open();
	    db.collection(this.settings.tableCombos).insert(arr, {w: 1}, function(err, data){
	    	db.close();
	    	callback(err,data);
	    });
	},

	getCombos: function(db, callback){
		db.open();
		db.collection(this.settings.tableCombos).find().toArray(function(err, data) {
			db.close();
			callback(err,{items: data});
		});
	},

	deleteAllCombos: function(db, callback){
		db.open();
		db.collection(this.settings.tableCombos).remove(function(err, res) {
			db.close();
			callback(err,{deletedRows: "deleted rows: " + res.result.n});
		});
	}
};