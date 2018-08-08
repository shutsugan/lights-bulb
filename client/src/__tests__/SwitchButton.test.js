import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import SwitchButton from '../components/SwitchButton';

const device = {
    id: 3,
    active: false
}

const device_2 = {
	id: 1,
	active: true
}

describe('SwitchButton', () => {
    it('should be defined', () => {
      expect(SwitchButton).toBeDefined();
    });
  
    it('should render correctly', () => {
      const tree = shallow(<SwitchButton id={device.id} state={device.active} />);
      expect(tree).toMatchSnapshot();
    });

    it('should match the device state', () => {
      const tree = shallow(<SwitchButton id={device.id} state={device.active} />);
      const tree_2 = shallow(<SwitchButton id={device.id} state={device_2.active} />);

      expect(tree.unrendered.props.state).toEqual(false);
      expect(tree_2.unrendered.props.state).toEqual(true);
    });
});