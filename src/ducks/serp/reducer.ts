import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
    setAvailability,
    setAvailabilityOptions,
    setData,
    setInsurance,
    setInsuranceOptions,
    setSort,
    setSpeciality,
    setSpecialtyOptions,
} from './actions';
import { Availability, IFilterOptions, ISerpDataPayload, ISerpState, SerpSort } from './types';

const initialState: ISerpState = {
    data: [],
    filters: {
        availability: [],
        availabilityOptions: [],
        speciality: [],
        specialityOptions: [],
        insurance: [],
        insuranceOptions: [],
        sort: SerpSort.NEXT_AVAILABLE,
    },
};

export const serpReducer = createReducer<ISerpState>(initialState, {
    [setAvailability.type]: (state: ISerpState, action: PayloadAction<Availability[]>) => {
        state.filters.availability = action.payload;
    },
    [setAvailabilityOptions.type]: (state: ISerpState, action: PayloadAction<IFilterOptions>) => {
        state.filters.availabilityOptions = action.payload;
    },
    [setSpeciality.type]: (state: ISerpState, action: PayloadAction<string[]>) => {
        state.filters.speciality = action.payload;
    },
    [setSpecialtyOptions.type]: (state: ISerpState, action: PayloadAction<IFilterOptions>) => {
        state.filters.specialityOptions = action.payload;
    },
    [setInsurance.type]: (state: ISerpState, action: PayloadAction<string[]>) => {
        state.filters.insurance = action.payload;
    },
    [setInsuranceOptions.type]: (state: ISerpState, action: PayloadAction<IFilterOptions>) => {
        state.filters.insuranceOptions = action.payload;
    },
    [setSort.type]: (state: ISerpState, action: PayloadAction<SerpSort>) => {
        state.filters.sort = action.payload;
    },
    [setData.type]: (state: ISerpState, action: PayloadAction<ISerpDataPayload>) => {
        state.data = action.payload.items;
    },
    // There could be data fetching actions like loading, etc...
});
