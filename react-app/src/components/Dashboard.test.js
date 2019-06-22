import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import Display1 from './Display';


it('should render', () => {
    render(<Dashboard/>, <Display1/>);
  });




it('should display buttons', () => {
 const {getByText}= render(<Display1/>);
 const header1= getByText(/strike/i);
 const header2 = getByText(/ball/i);
 const header3 =getByText(/foul/i);
 const header4 =getByText(/hit/i);
 

 expect(header1).toBeInTheDocument();
 expect(header2).toBeInTheDocument();
 expect(header3).toBeInTheDocument();
 expect(header4).toBeInTheDocument();




});

it('displays event when button is clicked', () => {
    const { getByText } = render(<Dashboard/>);
    const button = getByText(/click-strike/i);
    const button2 = getByText(/click-ball/i);
    const button3= getByText(/click-foul/i);
    const button4 = getByText(/click-hit/i);
    const button5 = getByText(/click-reset/i);
  
    fireEvent.click(button);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    fireEvent.click(button5);

  
  
  });