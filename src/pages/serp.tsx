import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Filters } from '../components/filters';
import { SerpList } from '../components/serp-list';
import { setData } from '../ducks/serp/actions';
import { Layout, SerpWrapper } from './styled';

import mockData from '../assets/mock.json';

export const Serp: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //Let's imagine we fetched data
        dispatch(setData(mockData.data));
    }, []);

    return (
        <Layout>
            <SerpWrapper>
                <Filters />
                <SerpList />
            </SerpWrapper>
        </Layout>
    );
};
