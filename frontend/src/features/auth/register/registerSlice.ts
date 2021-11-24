import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { processDob } from './components';
import { registerFormDto, registerStateDto } from './register-dto';

const initialState:registerStateDto = {
    token:'',
    status:'idle',
    errMsg:''
}


export const registerFunc = createAsyncThunk(
    'Register/regisfunc', async(params: registerFormDto, thunkApi) => {
        let dateOfBirth:string = processDob(params.Day,params.Month, params.Year);
        let {Day, Month, Year, ...registerInfo} = params;
        registerInfo.DateOfBirth = dateOfBirth;
        
    }
)


export const registerSlice = createSlice({
    name:'Register',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(registerFunc.pending, (state) => {
            state.status = 'isLoading';
        })
        .addCase(registerFunc.rejected, (state, actions: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = actions.payload;
        })
    }
})

export const { reducer, actions } = registerSlice;
// export const {  } = actions;
export const selectLoginState = (state: RootState) => state.login;
export default reducer;