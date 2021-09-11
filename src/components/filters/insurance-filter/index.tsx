import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInsurance } from '../../../ducks/serp/actions';
import { getInsurance, getInsuranceOptions } from '../../../ducks/serp/selectors';
import { CheckboxDropdown } from '../../ui';

export const InsuranceFilter: React.FC = () => {
    const insurance = useSelector(getInsurance);
    const insuranceOptions = useSelector(getInsuranceOptions);
    const dispatch = useDispatch();

    const handleSpecialityChange = useCallback(
        (newOptions: string[]) => {
            dispatch(setInsurance(newOptions));
        },
        [dispatch],
    );

    return (
        <CheckboxDropdown
            placeholder="Insurance"
            searchPlaceholder="Filter by insurance carrier"
            values={insurance}
            options={insuranceOptions}
            onApply={handleSpecialityChange}
            onReset={() => dispatch(setInsurance([]))}
        />
    );
};
