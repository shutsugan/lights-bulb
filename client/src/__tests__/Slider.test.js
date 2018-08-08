import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Slider from '../components/Slider';

const device = {
	brightness: 0
};

describe('Slider', () => {
    it('should be defined', () => {
      expect(Slider).toBeDefined();
    });
  
    it('should render correctly', () => {
      const tree = shallow(<Slider current={device} />);
      expect(tree).toMatchSnapshot();
    });
});