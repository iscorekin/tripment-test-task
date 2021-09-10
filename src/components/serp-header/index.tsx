import infoIcon from '../../assets/icons/info.svg';
import { SerpHeaderWrapper, TitleTypography, CaptionWrapper, CaptionTypography, CaptionIcon } from './styled';

export type ITitleProps = {
    title: string;
    caption: string;
};

export const SerpHeader: React.FC<ITitleProps> = ({ title, caption }) => {
    return (
        <SerpHeaderWrapper>
            <TitleTypography>{title}</TitleTypography>
            <CaptionWrapper>
                <CaptionIcon src={infoIcon} />
                <CaptionTypography>{caption}</CaptionTypography>
            </CaptionWrapper>
        </SerpHeaderWrapper>
    );
};
