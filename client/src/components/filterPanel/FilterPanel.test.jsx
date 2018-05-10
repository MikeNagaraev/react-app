import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterPanel from './FilterPanel';

describe('FilterPanel component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<FilterPanel />);
        expect(enzymeWrapper.find('.searchMovie-filter')).toHaveLength(1);
    });
});
