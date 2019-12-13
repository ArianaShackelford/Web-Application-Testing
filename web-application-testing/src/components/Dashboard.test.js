import React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('check to see if buttons display in Dashboard',() =>{
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