import styled from 'styled-components';
import { typography } from '../ui/typography';

export const SerpHeaderWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

export const TitleTypography = styled.h2`
    font-weight: 800;

    ${typography('h2')}
`;

export const CaptionIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const CaptionWrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 4px;
`;

export const CaptionTypography = styled.p`
    ${typography('p')}
`;
