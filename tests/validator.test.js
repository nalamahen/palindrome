var validator = require('../validator');

describe('Validator', () => {
    const validPalindrome = 'a man a plan a canal panama';
    const mockScores = [
        {name: 'Nala', score: 30},
        {name: 'Suji', score: 60},
        {name: 'Nala', score: 50},
        {name: 'Krish', score: 25},
        {name: 'Aarthy', score: 90},
        {name: 'Aarthy', score: 40},
        {name: 'Krish', score: 70},
        {name: 'Suji', score: 80}
    ];

    it('should the word palindrome', () => {
        expect(validator.isPalindrome(validPalindrome)).toEqual(true);
        expect(validator.isPalindrome('palindrome')).toEqual(false);
    });

    it('should add scores with name and return score', () => {
        let scores = [];
        let currentScore = validator.addScore('Nala', validPalindrome, scores);

        expect(scores).toEqual([{name: 'Nala', score: 27}]);
        expect(currentScore).toBe(27);

    });

    it('should return top 5 scores', () => {
        expect(validator.getTopFiveScores(mockScores).length).toBe(5);
        expect(validator.getTopFiveScores(mockScores)[0]).toEqual({name: 'Nala', score: 50});
        expect(validator.getTopFiveScores(mockScores)[4]).toEqual({name: 'Aarthy', score: 90});
    });
    
});