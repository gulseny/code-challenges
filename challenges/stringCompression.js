//Implement a method to perform string compression using the counts of repeated characters.

// Example: stringCompression('aabcccccaaa')
// Returns: 'a2b1c5a3'

var stringCompression = function(string){
	if(typeof string !== 'string'){
		throw new Error();
	} else {
		//collect the number of letters
		var letters = [];
		var counter = 0;
		for(var i = 0; i < string.length; i++){
			if(string[i] !== string[i + 1]){
				var count = (counter === 0) ? i - counter + 1: i - counter;
				letters.push([string[i], count]);
				counter = i;
			}
		}
		
		//form the string with the letter counts
		var newString = '';
		for(var j = 0; j < letters.length; j++){
			newString += letters[j][0] + letters[j][1];
		}

		return (newString.length < string.length) ? newString : string;
	}
};