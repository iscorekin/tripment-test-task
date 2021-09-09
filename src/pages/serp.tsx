import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Filters } from '../components/filters';
import { Table } from '../components/table';
import { setData } from '../ducks/serp/actions';
import { SerpWrapper } from './styled';

import mockData from '../assets/mock.json';

export const Serp: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //Let's imagine we fetched data
        dispatch(setData(mockData.data));
    }, []);

    return (
        <SerpWrapper>
            <Filters />
            <Table />
        </SerpWrapper>
    );
};
