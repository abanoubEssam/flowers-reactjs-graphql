import { AppThunk } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	user: any;
	loading: boolean;
	error: any;
}

const initialState: AuthState = {
	user: null,
	loading: false,
	error: null,
}

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action: PayloadAction<any>) => {
			state.user = action.payload;
			state.loading = false;
			state.error = null;
		},
		logoutSuccess: (state) => {
			state.user = null;
			state.loading = false;
			state.error = null;
		}
	}
});

export default AuthSlice.reducer;

const { loginStart, loginSuccess } = AuthSlice.actions;

export const login = (email: string, password: string): AppThunk => async dispatch => {
	dispatch(loginStart());
	try {
		// await  connect to login end-point
		dispatch(loginSuccess('token'));
	} catch (error) {
		console.error(error);
	}
}