import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Navbar from '../components/Navbar';

import dateFormat from 'dateformat';

const now = new Date();
const date = dateFormat(now, 'dddd, dS mmmm, yyyy');
const time = dateFormat(now, 'h:MM TT');

describe('Navbar', () => {
    it('should be defined', () => {
      expect(Navbar).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(<Navbar date={date} time={time} />);
        expect(tree).toMatchSnapshot();
    });

    it('should return the same data and time', () => {
        const tree = shallow(<Navbar date={date} time={time} />);

        expect(tree.unrendered.props.date).toEqual(date);
        expect(tree.unrendered.props.time).toEqual(time);
      });
});