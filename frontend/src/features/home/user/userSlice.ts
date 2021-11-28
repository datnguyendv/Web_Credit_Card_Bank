import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store";

const initialState = {
    name:'User Home'
}

export const userHomeSlice = createSlice ({
    name:'UserHome',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<string> ) => {
            state.name = action.payload;
        }
    },
})


export const { reducer, actions } = userHomeSlice;
export const { setUserInfo } = actions;
export const selectUserHomeState = (state: RootState) => state.userHomeState;
export default reducer;