import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

describe('Button component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('should render component', () => {
        const enzymeWrapper = mount(<Button />);
        expect(enzymeWrapper.find('button')).toHaveLength(1);
    });

    it('should handle click', () => {
        const onButtonClick = jest.fn();
        const enzymeWrapper = mount(<Button handleClick={onButtonClick} />);
        enzymeWrapper.find('button').simulate('click');
        expect(onButtonClick).toHaveBeenCalled();
    });
});
