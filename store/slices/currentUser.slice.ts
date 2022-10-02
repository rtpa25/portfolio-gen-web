import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  SocialLinks,
  Tech,
  UpdateTechInput,
  User,
} from '../../generated/graphql';

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

    updateAbout(
      state: CurrentUserDataState,
      action: PayloadAction<{ about: string }>
    ) {
      state.user!.about = action.payload.about;
    },

    addTechToList(state: CurrentUserDataState, action: PayloadAction<Tech>) {
      state.user?.techList.map((tech) => {
        if (tech.name === action.payload.name) return;
      });
      state.user?.techList.push(action.payload);
    },

    updateTechFromList(
      state: CurrentUserDataState,
      action: PayloadAction<UpdateTechInput>
    ) {
      state.user?.techList.map((tech) => {
        if (tech._id === action.payload._id) {
          if (action.payload.proficiency) {
            tech.proficiency = action.payload.proficiency;
          }
          if (action.payload.imageUrl) {
            tech.imageUrl = action.payload.imageUrl;
          }
        }
      });
    },

    deleteTechFromList(
      state: CurrentUserDataState,
      action: PayloadAction<{ techId: string }>
    ) {
      const newTechList = state.user!.techList!.filter(
        (tech) => tech._id !== action.payload.techId
      );
      state.user!.techList = newTechList ? newTechList : [];
    },
  },
});

export const {
  setCurrentUserData,
  addLink,
  updateAbout,
  addTechToList,
  deleteTechFromList,
  updateTechFromList,
} = CurrentUserDataSlice.actions;

export default CurrentUserDataSlice.reducer;
