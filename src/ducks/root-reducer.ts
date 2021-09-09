import { combineReducers } from 'redux';
import { serpReducer } from './serp/reducer';
import { IRootState } from './types';

export const rootReducer = combineReducers<IRootState>({
    serp: serpReducer,
});
