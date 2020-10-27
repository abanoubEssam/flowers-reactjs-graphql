import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth.slice';

const rootReducer = combineReducers({
	auth: AuthReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;