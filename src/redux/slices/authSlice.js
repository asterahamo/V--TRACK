import { createSlice } from '@reduxjs/toolkit'

const initialState = { loading: false, error: null, admin: [], profile: null }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        // register Admin
        registerAdmin: (state, action) => {
            state.admin.push(action.payload);
        },

        // login Admin
        LoginAdmin: (state, action) => {
            state.profile = action.payload;
        },

        //LOADING:
        setLoading: (state) => {
            state.loading = !state.loading;
        },

    }
})

const dataAction = authSlice.actions;
const userReducer = authSlice.reducer;

export { dataAction, userReducer };

