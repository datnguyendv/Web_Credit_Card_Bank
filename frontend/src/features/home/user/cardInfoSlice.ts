import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { homeApi } from "../../../api";
import { RootState } from "../../../app/store";
import { cardInfoStateDto } from "../home-dto";

export const initialState: cardInfoStateDto = {
    status: 'idle',
    errMsg: '',
    cardInfo: [],
}

export const getCardInfo = createAsyncThunk(
    'CardInfo/getCardInfo', async(id: number, thunkApi) => {
        let response: any = await homeApi.getCardById(id);
        if(response.statusCode >300 ) {
            return thunkApi.rejectWithValue(response.message);
        } else {
            return response
        }
    }
)

export const cardInfoSlice = createSlice ({
    name:'CardInfo',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCardInfo.pending, (state) => {
            state.status = 'isLoading';
        })
        .addCase(getCardInfo.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = action.payload;
        })
        .addCase(getCardInfo.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'idle';
            state.cardInfo = action.payload;
        })
    }
})


export const { reducer, actions } = cardInfoSlice;
// export const { setUserInfo } = actions;
export const selectUserHomeState = (state: RootState) => state.cardInfo;
export default reducer;