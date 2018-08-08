import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import SubNavbar from '../components/SubNavbar';

describe('SubNavbar', () => {
    it('should be defined', () => {
      expect(SubNavbar).toBeDefined();
    });
  
    it('should render correctly', () => {
      const tree = shallow(<SubNavbar title="test title" />);
      expect(tree).toMatchSnapshot();
    });

    it('should title be string and equal to passed title', () => {
        const tree = shallow(<SubNavbar name="test title" />);

        expect(typeof(tree.unrendered.props.name)).toBe('string');
        expect(tree.unrendered.props.name).toEqual('test title');
      });
});