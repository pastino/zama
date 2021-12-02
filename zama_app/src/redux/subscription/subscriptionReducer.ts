import {createSlice} from '@reduxjs/toolkit';

export interface SubscriptionState {
  id: number;
  user: any;
  startDate: Date;
  endDate: Date;
  extraInfo: string;
  available: boolean;
  createAt: Date;
  updateAt: Date;
}

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    subscriptions: [],
  },
  reducers: {
    setSubscription(state, action) {
      state.subscriptions = action.payload.subscriptions;
    },
  },
});

export const {setSubscription} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
