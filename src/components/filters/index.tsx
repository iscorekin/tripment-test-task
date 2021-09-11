import { useDispatch } from 'react-redux';
import { clearFilters } from '../../ducks/serp/actions';
import { CancelButton } from '../ui';
import { InsuranceFilter } from './insurance-filter';
import { SpecialityFilter } from './speciality-filter';
import { FiltersWrapper } from './styled';

export const Filters: React.FC = () => {
    const dispatch = useDispatch();

    const handleResetClick = () => dispatch(clearFilters());

    return (
        <FiltersWrapper>
            <SpecialityFilter />
            <InsuranceFilter />
            <CancelButton onClick={handleResetClick}>Reset Filters</CancelButton>
        </FiltersWrapper>
    );
};
