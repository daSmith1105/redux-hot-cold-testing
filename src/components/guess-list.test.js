import React from 'react';
import { shallow } from 'enzyme';
import { GuessList } from './guess-list';

describe(<GuessList />, () => {
    it('Should render without crashing', () => {
        const guesses = [1,2,3,4]
        shallow(<GuessList guesses={guesses}/>);
    });
    it('Renders a list of guesses', () => {
        const TEST_ARRAY = [1, 2, 3, 4, 5];
        const wrapper = shallow(<GuessList guesses={TEST_ARRAY} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(TEST_ARRAY.length);
        TEST_ARRAY.forEach((value, index) => {
          expect(items.at(index).text()).toEqual(value.toString());
        });
    });
});