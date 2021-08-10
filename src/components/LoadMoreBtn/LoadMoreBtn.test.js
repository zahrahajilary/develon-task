
import { shallow } from 'enzyme';
import React from 'react';

import LoadMoreBtn from "./LoadMoreBtn";

it('should render LoadMore component', () => {

    expect(shallow(<LoadMoreBtn onClick={()=>console.log(hi)} >btn</LoadMoreBtn>)).toMatchSnapshot();
});
