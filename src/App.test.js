import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PersonList from './PersonList';
//create a suite by using describe 
//pass into a string and a function
//string is a label for what is the suite covering 
describe('App', () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  })
  it('renders without crashing', ()=> {
    //shallow is a way of forcing it not  to load the
    //entire child tree of the app component
    //we are only loading app
    //appWrapper = shallow(<App />);
  });

  it('renders a person list', () => {
    
    //pass in a component that we want to find on the app component
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });

  it('has state', () => {
    
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it('has a people property on state', () => {
    
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined();
  });

  it('passes people property of state to personList as prop', () => {
    const personList = appWrapper.find(PersonList);
    //there should be a people property on the personList
    //and should equal the state of people 
    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
});