import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Logo from './Logo';

describe('Logo component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<Logo />);
        expect(enzymeWrapper.find('h1')).toHaveLength(1);
    });

    it('renders correctly snapshot', () => {
        const tree = renderer.create(
            <Logo title="netfilxroulette" className="logo" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
