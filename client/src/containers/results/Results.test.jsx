import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Results from './Results';

describe('Results component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<Results />);
        expect(enzymeWrapper.find('.resultsContainer')).toHaveLength(1);
    });
});
