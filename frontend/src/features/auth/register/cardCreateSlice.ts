import { cardCreatedStateDto, createCardInfoDto } from "./register-dto";
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../../app/store";
import { registerApi } from "../../../api/register-api";


export const initialState: cardCreatedStateDto = {
    isCreated:'',
    status:'idle',
    errMsg:'',
}

export const createCard = createAsyncThunk(
    'CreateCard/create', async(params:createCardInfoDto, thunkApi) => {
        console.log('in here');
        let response:any = await registerApi.createCard(params);
        //because status Code fail always greater than 2xx
        if(response.statusCode >300 ) {
            return thunkApi.rejectWithValue(response.message);
        } else {
            return response
        }
    }
)

export const createCardSlice = createSlice ({
    name:'CreateCard',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(createCard.pending, (state) => {
            state.status = 'isLoading';
        })
        .addCase(createCard.rejected, (state, actions: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = actions.payload;
        })
        .addCase(createCard.fulfilled, (state, actions: PayloadAction<any>) => {
            state.status = 'idle';
            state.isCreated = actions.payload;
        })
    }
})

export const { reducer, actions } = createCardSlice;
// export const {  } = actions;
export const selectCardCreatedState = (state: RootState) => state.cardCreated;
export default reducer;