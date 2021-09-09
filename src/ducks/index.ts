import { createLogicMiddleware } from 'redux-logic';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { IRootState } from './types';
import { rootLogic } from './root-logic';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [createLogicMiddleware<IRootState>(rootLogic as any)],
    devTools: process.env.NODE_ENV !== 'production',
});
