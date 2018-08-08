import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import DefaultInput from '../components/DefaultInput';

describe('DefaultInput', () => {
  it('should be defined', () => {
    expect(DefaultInput).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(<DefaultInput name="test value" />);
    expect(tree).toMatchSnapshot();
  });

  it('should the value to be of type string and value equal to "test value"', () => {
    const tree = shallow(<DefaultInput name="test value" />);

    expect(typeof(tree.find('.DefaultInput').node.props.defaultValue)).toBe('string');
    expect(tree.find('.DefaultInput').node.props.defaultValue).toEqual('test value');
  });
});