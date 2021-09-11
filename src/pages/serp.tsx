import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Filters } from '../components/filters';
import { SerpList } from '../components/serp-list';
import { setData } from '../ducks/serp/actions';
import { SerpHeader } from '../components/serp-header';
import { Layout, SerpWrapper } from './styled';

import mockData from '../assets/mock.json';
import { LineDivider } from '../components/ui';

export const Serp: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //Let's imagine we fetched data
        dispatch(setData(mockData.data));
    }, []);

    return (
        <Layout>
            <SerpWrapper>
                <LineDivider />
                <Filters />
                {/* Of course we should use only price and city in title's props, then concatenate them */}
                <SerpHeader
                    title="Root Canal doctors in New York, NY"
                    caption="The average price of a procedure in New York is $300"
                />
                <SerpList />
            </SerpWrapper>
        </Layout>
    );
};
