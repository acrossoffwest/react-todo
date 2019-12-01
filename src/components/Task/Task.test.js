import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Task from './Task';

describe('Task', () => {
  let props;
  let shallowTask;
  let renderedTask;
  let mountedTask;

  const shallowTestComponent = () => {
    if (!shallowTask) {
      shallowTask = shallow(<Task {...props} />);
    }
    return shallowTask;
  };

  const renderTestComponent = () => {
    if (!renderedTask) {
      renderedTask = render(<Task {...props} />);
    }
    return renderedTask;
  };

  const mountTestComponent = () => {
    if (!mountedTask) {
      mountedTask = mount(<Task {...props} />);
    }
    return mountedTask;
  };  

  beforeEach(() => {
    props = {};
    shallowTask = undefined;
    renderedTask = undefined;
    mountedTask = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
