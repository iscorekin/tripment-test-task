import styled, { css } from 'styled-components';
import { typography } from '../typography';

export type IOpenedProps = {
    opened: boolean;
    values?: boolean;
};

export const CheckboxDropdownContainer = styled.div``;
export const CheckboxDropdownHeader = styled.div<IOpenedProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px 12px;

    border: 1px solid #becacb;
    box-sizing: border-box;
    border-radius: 4px;

    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;

    ${typography('p')};

    cursor: pointer;
    user-select: none;

    ${({ opened }) =>
        opened &&
        css`
            background-color: #327680;
            color: white;
        `}
`;

export const CheckboxDropdownIcon = styled.div<IOpenedProps>`
    width: 24px;
    height: 24px;
    display: flex;

    ${({ opened }) =>
        opened &&
        css`
            transform: rotate(180deg);
            > svg > path {
                fill: white;
            }
        `}

    ${({ values }) =>
        values &&
        css`
            width: 12px;
            height: 12px;

            cursor: pointer;
        `}
`;

export const CheckboxDropdownWindow = styled.div`
    position: absolute;
    height: 100%;
    max-height: 492px;
    margin-top: 8px;
    padding: 24px 0 0;

    background: white;
    box-sizing: border-box;
    border-radius: 8px;
    z-index: 1;

    display: flex;
    flex-direction: column;
    box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.16);

    overflow: hidden;
`;

export const CheckboxDropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 16px;
    overflow: hidden;
`;

export const CheckboxDropdownCheckboxes = styled.div`
    max-height: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 16px;

    overflow-y: auto;
`;

export const CheckboxDropdownFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    z-index: 1;
    box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.04);
`;

export const CheckboxDropdownPlaceholder = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;
