import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSpeciality } from '../../../ducks/serp/actions';
import { getSpeciality, getSpecialityOptions } from '../../../ducks/serp/selectors';
import { CheckboxDropdown } from '../../ui';

export const SpecialityFilter: React.FC = () => {
    const speciality = useSelector(getSpeciality);
    const specialityOptions = useSelector(getSpecialityOptions);
    const dispatch = useDispatch();

    const handleSpecialityChange = useCallback(
        (newOptions: string[]) => {
            dispatch(setSpeciality(newOptions));
        },
        [dispatch],
    );

    return (
        <CheckboxDropdown
            placeholder="Speciality"
            searchPlaceholder="Filter by speciality"
            values={speciality}
            options={specialityOptions}
            onApply={handleSpecialityChange}
            onReset={() => dispatch(setSpeciality([]))}
        />
    );
};
