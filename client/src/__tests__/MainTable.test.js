import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import MainTable from '../components/MainTable';

describe('MainTable', () => {
    it('should be defined', () => {
      expect(MainTable).toBeDefined();
    });
});