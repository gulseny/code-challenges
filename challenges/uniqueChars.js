// Implement an algorithm to determine if a string has all unique characters

// Extra credit: don't use additional data structures

var uniqueChars = function(string){
	if (typeof string !== 'string') {
		throw new Error();
	} else {
		var storage = {};
		for(var i = 0; i < string.length; i++){
			if(storage[string[i]] === undefined) {
				storage[string[i]] = 1;
			} else {
				storage[string[i]]++;
			}
		}

		for(var key in storage) {
			if(storage[key] > 1){
				return false;
			}
		}
		return true;
	}
};