import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import chartReducer from './chartSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        chart: chartReducer,
    },
});

export default store;