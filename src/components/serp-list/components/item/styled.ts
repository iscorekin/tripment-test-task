import styled from 'styled-components';
import { typography } from '../../../ui/typography';

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

export const NameTypography = styled.h3`
    ${typography('h3')}
`;

export const InfoItems = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const InfoItem = styled.p<{ color?: string }>`
    ${typography('p')}
    color: ${({ color }) => color || '#244D51'};
`;

export const Caption = styled.p`
    ${typography('caption')};
`;

export const Price = styled.h4`
    ${typography('h4')}
`;

export const LikeWrapper = styled.img`
    width: 24px;
    height: 24px;
    margin-top: auto;
`;
