import { ChangeEventHandler, useEffect, useState } from 'react';
import { IFilterOptions } from '../../../ducks/serp/types';
import { Button, CancelButton, Checkbox, Input } from '..';
import { useComponentVisible } from '../../../hooks';
import {
    CheckboxDropdownCheckboxes,
    CheckboxDropdownContainer,
    CheckboxDropdownContent,
    CheckboxDropdownFooter,
    CheckboxDropdownHeader,
    CheckboxDropdownIcon,
    CheckboxDropdownWindow,
} from './styled';

import { ArrowIcon } from './arrow-icon';

export type ICheckboxDropdownProps = {
    options: IFilterOptions;
    values: string[];
    placeholder: string;
    searchPlaceholder: string;
    onApply: (newOptions: string[]) => void;
    onReset: () => void;
};

export const CheckboxDropdown: React.FC<ICheckboxDropdownProps> = (props) => {
    const { options, values, placeholder, searchPlaceholder, onApply, onReset } = props;
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [buffer, setBuffer] = useState<string[]>([]);

    const { isComponentVisible, setIsComponentVisible, ref } = useComponentVisible(false);

    useEffect(() => {
        setBuffer(values);
    }, [values]);

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    const handleCheckboxChecked = (value: string) => {
        const valueIndex = buffer.indexOf(value);
        if (valueIndex !== -1) {
            const newBuffer = [...buffer];
            newBuffer.splice(valueIndex, 1);
            setBuffer(newBuffer);
        } else {
            setBuffer([...buffer, value]);
        }
    };

    const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
        const search = e.target.value;
        if (search)
            setFilteredOptions(options.filter((option) => option.option.toLowerCase().includes(search.toLowerCase())));
        else setFilteredOptions(options);
    };

    const handleApply = () => {
        onApply(buffer);
    };

    const handleHeaderClick = () => setIsComponentVisible(!isComponentVisible);

    return (
        <CheckboxDropdownContainer ref={ref}>
            <CheckboxDropdownHeader opened={isComponentVisible} onClick={handleHeaderClick}>
                {placeholder}
                <CheckboxDropdownIcon opened={isComponentVisible}>
                    <ArrowIcon />
                </CheckboxDropdownIcon>
            </CheckboxDropdownHeader>
            {isComponentVisible && (
                <CheckboxDropdownWindow>
                    <CheckboxDropdownContent>
                        <Input placeholder={searchPlaceholder} onChange={handleSearch} />
                        <CheckboxDropdownCheckboxes>
                            {filteredOptions.map((option) => {
                                return (
                                    <Checkbox
                                        value={option.option}
                                        checked={buffer.indexOf(option.option) !== -1}
                                        key={option.option}
                                        onChange={handleCheckboxChecked}
                                    >
                                        {option.option} ({option.count})
                                    </Checkbox>
                                );
                            })}
                        </CheckboxDropdownCheckboxes>
                    </CheckboxDropdownContent>
                    <CheckboxDropdownFooter>
                        <CancelButton onClick={onReset}>Reset</CancelButton>
                        <Button onClick={handleApply}>Apply</Button>
                    </CheckboxDropdownFooter>
                </CheckboxDropdownWindow>
            )}
        </CheckboxDropdownContainer>
    );
};
