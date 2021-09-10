import { ISerpItem } from '../../../../ducks/serp/types';
import { ItemInfo } from './info';
import { ItemPrice } from './price';
import { Avatar, InnerItemContent, ItemWrapper } from './styled';

export type IListItemProps = {
    item: ISerpItem;
    style: React.CSSProperties;
};

export const ListItem: React.FC<IListItemProps> = ({ item, style }) => {
    return (
        <ItemWrapper style={style}>
            <InnerItemContent>
                <Avatar src="https://thispersondoesnotexist.com/image" />
                <ItemInfo item={item} />
                <ItemPrice item={item} />
            </InnerItemContent>
        </ItemWrapper>
    );
};
