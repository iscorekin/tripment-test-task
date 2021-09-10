import styled from 'styled-components';

export const ItemWrapper = styled.div`
    border-bottom: 1px solid #eaeeee;

    :hover {
        background-color: #eaeeee;
    }
`;

export const Avatar = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 100%;
`;

export const InnerItemContent = styled.div`
    padding: 32px;

    display: flex;
    gap: 16px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-left: auto;
`;

// It should be in Typography
export const NameTypography = styled.h3`
    font-size: 22px;
    line-height: 32px;
    weight: 600;
    letter-spacing: -0.3px;
`;

export const InfoItems = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
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

export const InfoItem = styled.p<{ color?: string }>`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: ${({ color }) => color || '#244D51'};
`;

export const Caption = styled.p`
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    border-bottom: 1px dashed #244d51;
    color: #244d51;
`;

export const Price = styled.h4`
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.3px;
`;

export const LikeWrapper = styled.img`
    width: 24px;
    height: 24px;
    margin-top: auto;
`;
