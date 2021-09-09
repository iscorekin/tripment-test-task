import { createLogic } from 'redux-logic';
import { IRootState } from '../types';
import { setData, setInsuranceOptions, setSpecialtyOptions } from './actions';
import { Availability, IFilterOptions, ISerpDataPayload } from './types';

const setDataLogic = createLogic<IRootState, ISerpDataPayload>({
    type: [setData.type],
    process: ({ action }, dispatch, done) => {
        const items = action.payload.items;

        const availabilityOptions: IFilterOptions = Object.keys(Availability).map((key) => ({
            option: key,
            count: 0,
        }));
        const specialityOptions: IFilterOptions = [];
        const insuranceOptions: IFilterOptions = [];

        items.forEach((item) => {
            const specialityIndex = specialityOptions.findIndex((x) => x.option === item.speciality);
            if (specialityIndex !== -1) {
                specialityOptions[specialityIndex].count += 1;
            } else {
                specialityOptions.push({ option: item.speciality, count: 1 });
            }

            const insuranceIndex = insuranceOptions.findIndex((x) => x.option === item.insurances);
            if (insuranceIndex !== -1) {
                insuranceOptions[insuranceIndex].count += 1;
            } else {
                insuranceOptions.push({ option: item.insurances, count: 1 });
            }
        });

        dispatch(setSpecialtyOptions(specialityOptions));
        dispatch(setInsuranceOptions(insuranceOptions));

        done();
    },
    warnTimeout: 0,
});

export const serpLogic = [setDataLogic];
