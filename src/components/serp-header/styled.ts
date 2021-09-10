import styled from 'styled-components';

export const SerpHeaderWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

// It should be in Typography
export const TitleTypography = styled.h2`
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.3px;

    color: #244d51;
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

// It should be in Typography
export const CaptionTypography = styled.p`
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.3px;
`;
