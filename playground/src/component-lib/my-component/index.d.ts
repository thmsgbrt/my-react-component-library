import React from 'react';
interface MyComponentProps {
    text: string;
    color?: string;
}
declare const MyComponent: React.FC<MyComponentProps>;
export { MyComponentProps, MyComponent };
