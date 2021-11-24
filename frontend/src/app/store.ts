import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/auth/login/loginSlice';
import accountExistedReducer from '../features/auth/register/accountExistedSlice';
import accountCreatedReducer from '../features/auth/register/accCreateSlice';
import cardCreatedReducer from '../features/auth/register/cardCreateSlice';
import registerReducer from '../features/auth/register/registerInfoSlice';
import loginInfoReducer from '../features/auth/login/loginInfoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    accountExisted: accountExistedReducer,
    accountCreated: accountCreatedReducer,
    cardCreated: cardCreatedReducer,
    register:registerReducer,
    loginInfo: loginInfoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
