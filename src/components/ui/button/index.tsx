import styled from 'styled-components';
import { typography } from '../typography';

export const Button = styled.button`
    background: #327680;
    color: white;
    padding: 4px 24px;
    border: 1px solid #327680;
    box-sizing: border-box;
    border-radius: 4px;

    font-weight: 600;
    ${typography('p')}

    cursor: pointer;
`;

export const CancelButton = styled.button`
    background: none;
    border: none;
    color: #ed6852;

    ${typography('caption')}

    cursor: pointer;
`;
