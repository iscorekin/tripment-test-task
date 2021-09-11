import { ChangeEventHandler, useEffect, useState } from 'react';
import { IFilterOptions } from '../../../ducks/serp/types';
import { Button, CancelButton, Checkbox, CircleDivider, Input } from '..';
import { useComponentVisible } from '../../../hooks';
import {
    CheckboxDropdownCheckboxes,
    CheckboxDropdownContainer,
    CheckboxDropdownContent,
    CheckboxDropdownFooter,
    CheckboxDropdownHeader,
    CheckboxDropdownIcon,
    CheckboxDropdownPlaceholder,
    CheckboxDropdownWindow,
} from './styled';

import { ArrowIcon } from './arrow-icon';
import { CloseIcon } from './close-icon';

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

    const handleCloseIconClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
        e.stopPropagation();
        onReset();
    };

    const handleResetClick = () => {
        setBuffer([]);
    };

    return (
        <CheckboxDropdownContainer ref={ref}>
            <CheckboxDropdownHeader opened={isComponentVisible} onClick={handleHeaderClick}>
                <CheckboxDropdownPlaceholder>
                    <span>{values.length === 1 ? values[0] : placeholder}</span>
                    <CircleDivider color={isComponentVisible ? 'white' : undefined} />
                    {values.length > 1 && <span>{values.length}</span>}
                </CheckboxDropdownPlaceholder>
                <CheckboxDropdownIcon opened={isComponentVisible} values={!!values.length}>
                    {values.length ? <CloseIcon onClick={handleCloseIconClick} /> : <ArrowIcon />}
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
                        <CancelButton onClick={handleResetClick}>Reset</CancelButton>
                        <Button onClick={handleApply}>Apply</Button>
                    </CheckboxDropdownFooter>
                </CheckboxDropdownWindow>
            )}
        </CheckboxDropdownContainer>
    );
};
