import { css } from 'styled-components';

export type ITypographyType = 'p' | 'h2' | 'h3' | 'h4' | 'caption';

const pTypography = css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
`;

const h2Typography = css`
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.3px;
`;

const h3Typography = css`
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.3px;
`;

const h4Typography = css`
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.3px;
`;

const captionTypography = css`
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;

    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 4px;
`;

export const typography = (type: ITypographyType) => () => {
    switch (type) {
        case 'p':
            return pTypography;
        case 'h2':
            return h2Typography;
        case 'h3':
            return h3Typography;
        case 'h4':
            return h4Typography;
        case 'caption':
            return captionTypography;
        default:
            return pTypography;
    }
};

console.log(typography);
