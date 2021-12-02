import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginApi } from '../../../api';
import { RootState } from '../../../app/store';
import { changePassDto, changePassState, forgotPassDto } from './forgot-pass-dto';

export const initialState: changePassState = {
    state:'',
    status: 'idle',
    errMsg:''
}

export const forgotPass = createAsyncThunk(
    'ChangePass/forgotPass', async(params: forgotPassDto, thunkApi) => {
        let forgotInfoRequest: changePassDto = {
            UserName: params.UserName,
            ID: params.ID,
            Email: params.Email,
            NewPassword: '',
            Status: 'forgot password'
        }
        let response: any = await loginApi.changePassword(forgotInfoRequest);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        return response;
    }
)

export const changePassSlice = createSlice({
    name: 'ChangePass',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(forgotPass.pending, (state) => {
            state.status = 'isLoading';
          })
        .addCase(forgotPass.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'idle';
            state.state = action.payload;
        })
        .addCase(forgotPass.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = action.payload;
        })
    }

})


export const { reducer, actions } = changePassSlice;
// export const { setloginInfo } = actions;
export const selectChangePassState = (state: RootState) => state.changePasswordState;
export default reducer;
