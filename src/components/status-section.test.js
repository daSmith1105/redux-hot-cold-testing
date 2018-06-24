import React from 'react';
import { shallow } from 'enzyme';
import StatusSection from './status-section';

describe(<StatusSection />, () => {
    it('Should render without crashing', () => {
        shallow(<StatusSection />);
    });
});