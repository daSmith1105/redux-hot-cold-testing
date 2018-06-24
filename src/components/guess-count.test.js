import React from 'react';
import { shallow } from 'enzyme';
import { GuessCount } from './guess-count';

describe(<GuessCount />, () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount />);
    });
    it('Renders the correct count', () => {
        const TEST_ARRAY = [1,2,3,4,5];
        const TEST_COUNT = TEST_ARRAY.length;

        const wrapper = shallow(<GuessCount guessCount={TEST_COUNT} />);
        expect(wrapper.text()).toEqual(`You\'ve made ${TEST_COUNT} guesses!`);
    });
});