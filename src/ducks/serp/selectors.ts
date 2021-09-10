import { createSelector } from 'reselect';
import { IRootState } from '../types';

const slice = (state: IRootState) => state.serp;
export const getSerpData = createSelector(slice, (state) => state.data);
