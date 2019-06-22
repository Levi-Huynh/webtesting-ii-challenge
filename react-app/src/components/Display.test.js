import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';


import Display1 from './Display';

it('should render', () => {
    render( <Display1/>);
  });


  it('should display strikes, ball, foul, hit', () => {
   const{queryByText}= render( <Display1/>);
   const header1 = queryByText(/strike/i);
   const header2 = queryByText(/ball/i);
   const header3 = queryByText(/foul/i);
   const header4 = queryByText(/hit/i);

   expect(header1).toBeVisible();
   expect(header2).toBeVisible();
   expect(header3).toBeVisible();
   expect(header4).toBeVisible();
  });
