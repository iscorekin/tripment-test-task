import { useSelector } from 'react-redux';
import { getSerpData } from '../../ducks/serp/selectors';
import { List } from './components/list';

export const SerpList: React.FC = () => {
    const serpData = useSelector(getSerpData);

    if (!serpData) return null;

    return <List items={serpData} />;
};
