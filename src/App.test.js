import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//create a suite by using describe 
//pass into a string and a function
//string is a label for what is the suite covering 
describe('App', () => {
  it('renders without crashing', ()=> {
    //shallow is a way of forcing it not  to load the
    //entire child tree of the app component
    //we are only loading app
    const appWrapper = shallow(<App />)
  });
});