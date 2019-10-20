import React from 'react';
import styled from 'styled-components';

const StyledMyComponent = styled.div<{ color?: string }>`
  color: ${p => p.color || 'pink'};
`;

interface MyComponentProps {
  text: string;
  color?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text, color }) => (
  <StyledMyComponent color={color}>{text}</StyledMyComponent>
);

export { MyComponentProps, MyComponent };
