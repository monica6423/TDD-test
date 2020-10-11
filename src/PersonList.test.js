import React from 'react';
import { shallow } from 'enzyme';
import PersonList from './PersonList';

describe('PersonList', () => {
    it('renders a ul elements', () => {
        const personListtWrapper = shallow(<PersonList />);
        const peopleListUls = personListtWrapper.find('ul');
        expect(peopleListUls).toHaveLength(1);
    })

    it('', () => {
        const personListtWrapper = shallow(<PersonList />);
    })
})