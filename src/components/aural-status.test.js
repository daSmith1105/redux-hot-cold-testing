import React from 'react'
import { shallow } from 'enzyme';
import { AuralStatus } from './aural-status';

describe(<AuralStatus />, () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });
    it('Renders update', () => {
        let TEST_STATUS = 'Test update';
        
        let wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS} />);
        expect(wrapper.contains(TEST_STATUS)).toEqual(true);
      });
});