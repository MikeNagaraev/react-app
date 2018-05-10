import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MovieCard from './MovieCard';

describe('MovieCard component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<MovieCard />);
        expect(enzymeWrapper.find('.movieCard')).toHaveLength(1);
    });
    
    it('renders correctly snapshot', () => {
        const tree = renderer.create(
            <MovieCard title="Film 1" year="2004" genre="Action" picture="/assets/images/pulp.jpg" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
