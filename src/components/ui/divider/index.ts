import styled from 'styled-components';

export const LineDivider = styled.div`
    width: 100%;
    border: 1px solid #eaeeee;
`;

export const CircleDivider = styled.div<{ color?: string }>`
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: ${({ color }) => color || '#244D51'};

    :first-child {
        display: none;
    }

    :last-child {
        display: none;
    }
`;
