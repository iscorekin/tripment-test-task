import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilters, getSerpData } from '../../ducks/serp/selectors';
import { List } from './components/list';

export const SerpList: React.FC = () => {
    const serpData = useSelector(getSerpData);
    const filters = useSelector(getFilters);

    const [filteredList, setFilteredList] = useState(serpData);

    useEffect(() => {
        if (serpData)
            setFilteredList(
                serpData.filter((item) => {
                    let valid = true;
                    if (filters.insurance.length) {
                        valid = filters.insurance.indexOf(item.insurances) !== -1;
                    }
                    if (filters.speciality.length) {
                        valid = filters.speciality.indexOf(item.speciality) !== -1;
                    }

                    return valid;
                }),
            );
    }, [serpData, filters]);

    if (!serpData) return null;

    return <List items={filteredList} />;
};
