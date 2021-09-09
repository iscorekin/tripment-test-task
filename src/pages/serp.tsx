import { Filters } from '../components/filters';
import { Table } from '../components/table';
import { SerpWrapper } from './styled';

export const Serp: React.FC = () => (
    <SerpWrapper>
        <Filters />
        <Table />
    </SerpWrapper>
);
