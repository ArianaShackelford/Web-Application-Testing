import React from 'react';
import { render } from '@testing-library/react';
import {Display} from './components/Display';

import { Dashboard } from './components/Dashboard';


test('check to see if strike and ball are displayed in Display',()=>{
    const {getByText} = render(<Display/>);
    const strikecheck = getByText(/strikes/i);
    const ballcheck = getByText(/ball/i);

    expect(strikecheck).toBeInTheDocument();
    expect(ballcheck).toBeInTheDocument();
});

test('check to see if dashboard buttons display',() =>{
  const {getByText} = render(<Dashboard/>);
  const strikebtncheck = getByText(/strike/i);
  const ballbtncheck = getByText(/ball/i);
  const foulbtncheck = getByText(/foul/i);
  const hitbtncheck = getByText(/hit/i);

  expect(strikebtncheck).toBeInTheDocument();
  expect(ballbtncheck).toBeInTheDocument();
  expect(foulbtncheck).toBeInTheDocument();
  expect(hitbtncheck).toBeInTheDocument();
});