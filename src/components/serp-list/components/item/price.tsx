import { ISerpItem } from '../../../../ducks/serp/types';
import like from '../../../../assets/icons/like.svg';
import { Caption, LikeWrapper, Price, PriceWrapper } from './styled';

export type IPriceProps = {
    item: ISerpItem;
};

export const ItemPrice: React.FC<IPriceProps> = ({ item }) => {
    return (
        <PriceWrapper>
            <Caption>avg. price</Caption>
            <Price>{item.price}$</Price>
            <LikeWrapper src={like} />
        </PriceWrapper>
    );
};
