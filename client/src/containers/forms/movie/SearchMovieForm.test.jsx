import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import SearchMovieForm from './SearchMovieForm';

describe('SearchMovieForm component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<SearchMovieForm />);
        expect(enzymeWrapper.find('.searchMovie-form')).toHaveLength(1);
    });

    it('renders correctly snapshot', () => {
        const tree = renderer.create(
            <SearchMovieForm />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
