import React from 'react';  
import { render } from '@testing-library/react';  
import '@testing-library/jest-dom';  // Import the custom matchers from jest-dom  
import CustomButton from '../button';  

test('renders the button with the correct label', () => {  
  const { getByText } = render(<CustomButton label="Click Me" />);  
  expect(getByText('Click Me')).toBeInTheDocument();  
});  