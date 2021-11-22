import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store";


export interface loginState {
    userName: string,
    password: string
}

const initialState: loginState = {
    userName: "",
    password: ""
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<loginState>) => {
            state.userName = action.payload.userName;
            state.password = action.payload.password;
        }

    }
})

export const { reducer, actions } = loginSlice;

export const { setInfo } = actions;

export const selectLoginState = (state: RootState) => state.login;

export default reducer;