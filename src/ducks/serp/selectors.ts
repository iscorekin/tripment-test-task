import { createSelector } from 'reselect';
import { IRootState } from '../types';

const slice = (state: IRootState) => state.serp;
export const getSerpData = createSelector(slice, (state) => state.data);

export const getFilters = createSelector(slice, (state) => state.filters);
export const getSpeciality = createSelector(getFilters, (filters) => filters.speciality);
export const getSpecialityOptions = createSelector(getFilters, (filters) => filters.specialityOptions);
export const getInsurance = createSelector(getFilters, (filters) => filters.insurance);
export const getInsuranceOptions = createSelector(getFilters, (filter) => filter.insuranceOptions);
