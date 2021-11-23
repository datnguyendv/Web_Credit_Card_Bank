import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginApi } from "../../../api/login-api";
import { RootState } from "../../../app/store";
import { fetchCount } from "../../counter/counterAPI";
import { loginInfo } from "./login-dto";

export interface loginState {
    token: string,
    status: 'idle' | "isLoading" | "failed",
    errMsg: string,
}

const initialState: loginState = {
    token:' ',
    status: 'idle',
    errMsg:' '
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
            console.log(state.token);
            
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
