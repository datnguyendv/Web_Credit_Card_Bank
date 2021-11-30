import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { listLoginHistory, loginHistoryStateDto } from "../home-dto";

export const initialState: loginHistoryStateDto = {
    listLoginHis: [],
    errMsg: '',
    status: 'idle',

}

export const getAllLoginHis = createAsyncThunk(
    "LoginHistory/getAllLoginHis", async() => {

    }
)

export const loginHistorySlice = createSlice({
    name: 'LoginHistory',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
        .addCase(getAllLoginHis.pending, (state ) => {
            state.status = 'isLoading';
        })
        .addCase(getAllLoginHis.rejected, (state, action:PayloadAction<any>) => {
            state.errMsg = action.payload;
            state.status = 'failed';
        })
        .addCase(getAllLoginHis.fulfilled, (state, action:PayloadAction<any>) => {
            state.status = 'idle';
            state.listLoginHis = action.payload;
        })
    }

})

export const { reducer, actions } = loginHistorySlice;
// export const { setUserInfo } = actions;
export const selectUserHomeState = (state: RootState) => state.userHomeState;
export default reducer;