import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/auth/login/loginSlice';
import accountExistedReducer from '../features/auth/register/accountExistedSlice';
import accountCreatedReducer from '../features/auth/register/accCreateSlice';
import cardCreatedReducer from '../features/auth/register/cardCreateSlice';
import registerReducer from '../features/auth/register/registerInfoSlice';
import loginInfoReducer from '../features/auth/login/loginInfoSlice';
import paymentReducer from '../features/payment/paymentSlice';
import userHomeReducer from '../features/home/user/userSlice';
import sendMailReducer from '../features/sendmail/sendMailSlice';
import cardInfoReducer from '../features/home/user/cardInfoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    accountExisted: accountExistedReducer,
    accountCreated: accountCreatedReducer,
    cardCreated: cardCreatedReducer,
    register:registerReducer,
    loginInfo: loginInfoReducer,
    paymentState: paymentReducer,
    userHomeState: userHomeReducer,
    sendMail: sendMailReducer,
    cardInfo: cardInfoReducer,
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
