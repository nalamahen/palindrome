function addScore(name, word, scores) {	
	var lenthOfWord = word.length;
	scores.push({name: name, score: lenthOfWord});
	return lenthOfWord;
}


function isPalindrome(word) {	
	var regex = /[^A-Za-z0-9]/g;
	var lowerRegexWord = word.toLowerCase().replace(regex, ''); 
	var reverseWord = lowerRegexWord.split('').reverse().join(''); 
	return reverseWord === lowerRegexWord;	
}

function getTopFiveScores(scores) {
	var sortedScores = scores.sort(function(obj1, obj2) {
		// Ascending - first score less than the previous
		return obj1.score - obj2.score;
	});

	return sortedScores.slice(Math.max(scores.length - 5, 1));
	
}

module.exports = {
    addScore,
    isPalindrome,
    getTopFiveScores
}