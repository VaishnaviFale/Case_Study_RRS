import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './../MyComponent';
describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<MyComponent />);
  });
});