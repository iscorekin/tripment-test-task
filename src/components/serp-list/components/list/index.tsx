import { ISerpItem } from '../../../../ducks/serp/types';
import { AutoSizer, List as VirtualList, ListRowRenderer } from 'react-virtualized';
import { ListItem } from '../item';
import { ListWrapper } from './styled';

export type IListProps = {
    items: ISerpItem[];
};

export const List: React.FC<IListProps> = ({ items }) => {
    const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
        return <ListItem key={key} item={items[index]} style={style} />;
    };

    return (
        <ListWrapper>
            <AutoSizer disableWidth>
                {({ height }) => (
                    <VirtualList
                        height={height}
                        width={844}
                        rowCount={items.length}
                        rowHeight={152}
                        rowRenderer={rowRenderer}
                    />
                )}
            </AutoSizer>
        </ListWrapper>
    );
};
