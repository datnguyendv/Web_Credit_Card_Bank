import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { paymentApi } from '../../api';
import { RootState } from '../../app/store';
import { internalPaymentDto, internalTransferInfoDto, location, paymentStateDto } from './payment-dto';


export const initialState:paymentStateDto = {
    state:'',
    status:'idle',
    errMsg:''
}

export const internalTransfer = createAsyncThunk(
    'Payment/InternalTransfer', async(params: internalPaymentDto, thunkApi) => {
        let randomLocation = Math.random() * (location.length - 1);
        let internalRequest: internalTransferInfoDto = {
            CardSendId: params.CardSendId,
            CardReceiveId: params.CardReceiveId,
            Balance: params.Balance,
            Location: location[randomLocation],
        } 
        let response:any = paymentApi.internalTransfer(internalRequest);
        if(response.statusCode >300 ) {
            return thunkApi.rejectWithValue(response.message);
        } else {
            return response
        }
    })

export const externalTransfer = createAsyncThunk(
    'Payment/ExternalTransfer', async() => {
        let response :string ='';
        return response
    }
)

export const paymentSlice = createSlice ({
    name:'Payment',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(internalTransfer.pending, (state) => {
            state.status = 'isLoading';
        })
        .addCase(internalTransfer.rejected, (state, actions: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = actions.payload;
        }) 
        .addCase(internalTransfer.fulfilled, (state, actions: PayloadAction<any>) => {
            state.status = 'idle';
            state.state = actions.payload
        })
        .addCase(externalTransfer.pending, (state) => {
            state.status = 'isLoading';
        })
        .addCase(externalTransfer.rejected, (state, actions: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = actions.payload;
        }) 
        .addCase(externalTransfer.fulfilled, (state, actions: PayloadAction<any>) => {
            state.status = 'idle';
            state.state = actions.payload
        })
    }
})

export const { reducer, actions } = paymentSlice;
// export const {  } = actions;
export const selectPaymentState = (state: RootState) => state.paymentState;
export default reducer;