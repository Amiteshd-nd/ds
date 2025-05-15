import React from 'react';  
import { Button } from '@adobe/react-spectrum';  

interface ButtonProps {  
  label: string;  
}  

const CustomButton: React.FC<ButtonProps> = ({ label }) => {  
  return <Button variant="cta">{label}</Button>;  
};  

export default CustomButton;  