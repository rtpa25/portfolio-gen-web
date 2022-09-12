import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SocialLinks, User } from '../../generated/graphql';

interface CurrentUserDataState {
  user: User | undefined;
}

// Define the initial state using that type
const initialState: CurrentUserDataState = {
  user: undefined,
};

export const CurrentUserDataSlice = createSlice({
  name: 'currentUser',

  initialState: initialState,

  reducers: {
    setCurrentUserData: (
      state: CurrentUserDataState,
      action: PayloadAction<CurrentUserDataState>
    ) => {
      state.user = action.payload.user;
    },
    addLink(state: CurrentUserDataState, action: PayloadAction<SocialLinks>) {
      state.user?.socialLinks.map((link) => {
        if (
          link.link === action.payload.link &&
          link.name === action.payload.name
        )
          return;
      });
      state.user?.socialLinks.push(action.payload);
    },
  },
});

export const { setCurrentUserData, addLink } = CurrentUserDataSlice.actions;

export default CurrentUserDataSlice.reducer;
