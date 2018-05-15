import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


import HomeHeader from './HomeHeader';

describe('HomeHeader component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<HomeHeader />);
        expect(enzymeWrapper.find('.header')).toHaveLength(1);
    });

    it('renders correctly snapshot', () => {
        const tree = renderer.create(
            <HomeHeader />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
