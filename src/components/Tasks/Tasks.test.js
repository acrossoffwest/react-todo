import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Tasks from './Tasks';

describe('Tasks', () => {
  let props;
  let shallowTasks;
  let renderedTasks;
  let mountedTasks;

  const shallowTestComponent = () => {
    if (!shallowTasks) {
      shallowTasks = shallow(<Tasks {...props} />);
    }
    return shallowTasks;
  };

  const renderTestComponent = () => {
    if (!renderedTasks) {
      renderedTasks = render(<Tasks {...props} />);
    }
    return renderedTasks;
  };

  const mountTestComponent = () => {
    if (!mountedTasks) {
      mountedTasks = mount(<Tasks {...props} />);
    }
    return mountedTasks;
  };  

  beforeEach(() => {
    props = {};
    shallowTasks = undefined;
    renderedTasks = undefined;
    mountedTasks = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
