// Implement an algorithm to determine if a string has all unique characters

// Extra credit: don't use additional data structures

// time complexity: O(n) space complexity: O(n)
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

// time complexity: O(n * n) space complexity: O(1)
var uniqueCharsInPlace = function(string){
	if(typeof string !== 'string'){
		throw new Error();
	} else {
		for(var i = 0; i < string.length; i++){
			for(var j = 0; j < string.length; j++){
				if(i !== j && string[i] === string[j]){
					return false;
				}
			}
		}
	}
	return true;
};

// notes to self: clarify if case matters

//alternative way
// time complexity: O(n) space complexity: O(n)
var uniqueChars = function(string){
	if(typeof string !== 'string'){
		throw new Error();
	} else {
		var values = new Array(256);
		for(var i = 0; i < string.length; i++){
			if(values[string.charCodeAt(i)]){
				return false;
			}
			values[string.charCodeAt(i)] = true;
		}
		return true;
	}
};