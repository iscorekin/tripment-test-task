import { ISerpItem } from '../../../../ducks/serp/types';
import { pluralization } from '../../../../helpers/pluralization';
import { CircleDivider } from '../../../ui';
import { InfoItems, InfoItem, InfoWrapper, NameTypography } from './styled';

export type IItemInfoProps = {
    item: ISerpItem;
};

export const ItemInfo: React.FC<IItemInfoProps> = ({ item }) => {
    return (
        <InfoWrapper>
            <NameTypography>{item.name}</NameTypography>
            <InfoItems>
                <InfoItem>{item.speciality}</InfoItem>
                <CircleDivider />
                <InfoItem>{`${item.experience} ${pluralization(
                    item.experience,
                    'Year',
                    'Years',
                )} Experience`}</InfoItem>
                <CircleDivider />
                <InfoItem color="#D97767">
                    {`${item.reviewsCount} ${pluralization(item.reviewsCount, 'Review', 'Reviews')}`}
                </InfoItem>
            </InfoItems>
            <InfoItems>
                {item.telehealth && <InfoItem color="#668386">Video visit</InfoItem>}
                <CircleDivider color="#668386" />
                <InfoItem color="#668386">{item.address}</InfoItem>
            </InfoItems>
        </InfoWrapper>
    );
};
