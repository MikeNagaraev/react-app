import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<Footer />);
        expect(enzymeWrapper.find('footer')).toHaveLength(1);
    });

    it('renders correctly snapshot', () => {
        const tree = renderer.create(
            <Footer text="netflixroulette"/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
