import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginApi } from "../../../api/login-api";
import { RootState } from "../../../app/store";
import { jwtDecodeFunc } from "../jwtProcess/decode-jwt";
import { loginInfo, loginState } from "./login-dto";

const initialState: loginState = {
    token:'',
    status: 'idle',
    errMsg:'',
    type: ''
}

export const loginFunction = createAsyncThunk(
    'Login/test',
    async (params: loginInfo, thunkApi) => {
        console.log(params);
        const response:any = await loginApi.postLogin(params);
        console.log("slide: ", response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
  );

export const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setInfo: (state) => {
            state.token = "random token here";
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginFunction.pending, (state) => {
            state.status = 'isLoading';
          })
        .addCase(loginFunction.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'idle';
            state.token = action.payload;
            localStorage.setItem("token",state.token);
            let decode = jwtDecodeFunc(state.token);
            state.type = decode;
            
        })
        .addCase(loginFunction.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.errMsg = action.payload;
            console.log("errSlide(): ",state.errMsg);
        })
    }
})


  


export const { reducer, actions } = loginSlice;
// export const {  } = actions;
export const selectLoginState = (state: RootState) => state.login;
export default reducer;
