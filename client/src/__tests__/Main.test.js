import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Main from '../components/Main';

describe('Main', () => {
    it('should be defined', () => {
      expect(Main).toBeDefined();
    });
  
    it('should render correctly', () => {
      const tree = shallow(<Main />);
      expect(tree).toMatchSnapshot();
    });
});