import React from 'react';
import checkIcon from '../../../assets/icons/check.svg';
import { CheckboxBox, CheckboxIcon, CheckboxWrapper, HoverCircle } from './styled';

export type ICheckboxProps = {
    checked?: boolean;
    value: string;
    onChange: (value: string, checked?: boolean) => void;
    // For the bright future
    disabled?: boolean;
};

// Sorry, but it's easier than adapting native input
export const Checkbox: React.FC<ICheckboxProps> = (props) => {
    const { onChange, value, checked, children } = props;

    const handleClick = () => onChange(value, checked);

    return (
        <CheckboxWrapper onClick={handleClick}>
            <CheckboxBox checked={checked}>
                {checked && <CheckboxIcon src={checkIcon} />}
                <HoverCircle />
            </CheckboxBox>
            {children}
        </CheckboxWrapper>
    );
};
