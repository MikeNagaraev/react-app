import * as React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResultPanel from './ResultPanel';

describe('ResultPanel component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<ResultPanel />);
        expect(enzymeWrapper.find('.resultPanel')).toHaveLength(1);
    });

    it('should render count of found movies', () => {
        const enzymeWrapper = shallow(
            <ResultPanel count={7} />
        );
        expect(enzymeWrapper.instance().props.count).toEqual(7);
    });
});
