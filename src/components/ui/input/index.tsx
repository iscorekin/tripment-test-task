import styled from 'styled-components';
import { typography } from '../typography';

export const Input = styled.input`
    width: 100%;
    border: 1px solid #becacb;
    border-radius: 4px;
    padding: 12px 8px;

    outline: none;

    ${typography('p')}

    ::placeholder {
        color: #91a5a7;
    }

    :focus {
        border: 1px solid #244d51;
    }
`;
