import { createAction } from '@reduxjs/toolkit';
import { Availability, IFilterOptions, ISerpDataPayload, SerpSort } from './types';

// Filters
export const setAvailability = createAction<Availability[]>('SERP/SET_AVAILABILITY');
export const setAvailabilityOptions = createAction<IFilterOptions>('SERP/SET_AVAILABILITY_OPTIONS');
export const setSpeciality = createAction<string[]>('SERP/SET_SPECIALTY');
export const setSpecialtyOptions = createAction<IFilterOptions>('SERP/SET_SPECIALITY_OPTIONS');
export const setInsurance = createAction<string[]>('SERP/SET_INSURANCE');
export const setInsuranceOptions = createAction<IFilterOptions>('SERP/SET_INSURANCE_OPTIONS');
export const setSort = createAction<SerpSort>('SERP/SET_SORT');

// Data
export const setData = createAction<ISerpDataPayload>('SERP/SET_DATA');
