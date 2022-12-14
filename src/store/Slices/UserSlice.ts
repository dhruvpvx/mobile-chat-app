// create a bisic typescript slice boilerplate

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@store';

export interface UserState {
  name: string;
  email: string;
  gender: string;
  id: string;
  image_url?: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  gender: '',
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.gender = action.payload.gender;
      state.image_url = action.payload.image_url;
    },
  },
});

export const UserActions = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
