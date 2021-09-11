import styled, { css } from 'styled-components';
import { typography } from '../typography';

export const CheckboxWrapper = styled.div`
    display: flex;
    gap: 4px;

    ${typography('p')}

    cursor: pointer;
`;

export const HoverCircle = styled.div`
    display: none;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    z-index: -1;

    background-color: #f5f7f7;
`;

export const CheckboxIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const CheckboxBox = styled.div<{ checked?: boolean }>`
    width: 24px;
    height: 24px;
    border: 1px solid #668386;
    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        ${HoverCircle} {
            display: block;
        }
    }

    ${({ checked }) =>
        checked &&
        css`
            border-color: #244d51;
            background-color: #244d51;
        `}
`;
