import {restartGame, makeGuess, generateAuralUpdate } from './actions';
import reducer from './reducer';

describe('Reducer', () => {
    it('Should return the initial state', () => {

        const state = reducer(undefined, {type:'_UNKNOWN'});

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type:'_UNKNOWN'});
        expect(state).toBe(currentState);
    });
});

describe('restartGame', () => {
    it('Should restart the game', () => {
        const answer = 50;
        let state = {
            guesses: [1,2,3,4,5],
            feedback: 'Not even close.',
            correctAnswer: 1
        };
        state = reducer(state, restartGame(answer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });
});

describe('makeGuess', () => {
    it('Should throw an error if NAN', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 1
        };
        const guess = NaN;
        state = reducer(state, makeGuess(guess));
        expect(state.feedback).toEqual('Please enter a valid number.');
    });

    it('Should make a guess', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 1
        };

        state = reducer(state, makeGuess(60));
        expect(state.guesses).toEqual([60]);
        expect(state.feedback).toEqual('You\'re Ice Cold...');

        state = reducer(state, makeGuess(40));
        expect(state.guesses).toEqual([60, 40]);
        expect(state.feedback).toEqual('You\'re Cold...');

        state = reducer(state, makeGuess(20));
        expect(state.guesses).toEqual([60, 40, 20]);
        expect(state.feedback).toEqual('You\'re Warm.');

        state = reducer(state, makeGuess(8));
        expect(state.guesses).toEqual([60, 40, 20, 8]);
        expect(state.feedback).toEqual('You\'re Hot!');

        state = reducer(state, makeGuess(1));
        expect(state.guesses).toEqual([60, 40, 20, 8, 1]);
        expect(state.feedback).toEqual('You got it!');
    });
});

describe('getAuralUpdate', () => {
    it('Should give aural update', () => {
        let state = {
            guesses: [1,2,3,4,5],
            feedback: 'Not even close.',
            auralStatus: ''
        };

        state = reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(
            `Here\'s the status of the game right now: Not even close. You\'ve made 5 guesses. In order of most- to least-recent, they are: 5, 4, 3, 2, 1`
        )
    });
});