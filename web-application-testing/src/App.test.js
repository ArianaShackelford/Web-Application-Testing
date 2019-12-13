import React from 'react';
import { render } from '@testing-library/react';
import {Display} from './components/Display';




test('check to see if strike and ball are displayed in Display',()=>{
    const {getByText} = render(<Display/>);
    const strikecheck = getByText(/strikes/i);
    const ballcheck = getByText(/ball/i);

    expect(strikecheck).toBeInTheDocument();
    expect(ballcheck).toBeInTheDocument();
});

