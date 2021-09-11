import { SpecialityFilter } from './speciality-filter';
import { FiltersWrapper } from './styled';

export const Filters: React.FC = () => {
    return (
        <FiltersWrapper>
            <SpecialityFilter />
        </FiltersWrapper>
    );
};
