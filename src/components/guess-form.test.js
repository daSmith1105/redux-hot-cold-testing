import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe(<GuessForm />, () => {
    it('Should render without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Should dispatch onMakeGuess on submit', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = '1';
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
      });
});