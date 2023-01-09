import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
    Experience,
    Project,
    SocialLinks,
    Tech,
    UpdateExperienceInput,
    UpdateProjectInput,
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

        addLink(
            state: CurrentUserDataState,
            action: PayloadAction<SocialLinks>
        ) {
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

        addTechToList(
            state: CurrentUserDataState,
            action: PayloadAction<Tech>
        ) {
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

        addExperienceToUser(
            state: CurrentUserDataState,
            action: PayloadAction<Experience>
        ) {
            state.user?.experienceList.push(action.payload);
        },

        updateExperienceOfUser(
            state: CurrentUserDataState,
            action: PayloadAction<UpdateExperienceInput>
        ) {
            state.user?.experienceList.map((experience) => {
                if (experience._id === action.payload._id) {
                    if (action.payload.description) {
                        experience.description = action.payload.description;
                    }
                    if (action.payload.from) {
                        experience.from = action.payload.from;
                    }
                    if (action.payload.to) {
                        experience.to = action.payload.to;
                    }
                }
            });
        },

        deleteExperienceFromUser(
            state: CurrentUserDataState,
            action: PayloadAction<{ expId: string }>
        ) {
            const newExpList = state.user!.experienceList!.filter(
                (exp) => exp._id !== action.payload.expId
            );
            state.user!.experienceList = newExpList ? newExpList : [];
        },

        addProjectToUser(
            state: CurrentUserDataState,
            action: PayloadAction<Project>
        ) {
            state.user?.projectList.push(action.payload);
        },

        updateProjectOfUser(
            state: CurrentUserDataState,
            action: PayloadAction<UpdateProjectInput>
        ) {
            state.user?.projectList.map((project) => {
                if (project._id === action.payload._id) {
                    if (action.payload.description) {
                        project.description = action.payload.description;
                    }
                    if (action.payload.demo) {
                        project.demo = action.payload.demo;
                    }
                    if (action.payload.github) {
                        project.github = action.payload.github;
                    }
                    if (action.payload.imageUrl) {
                        project.imageUrl = action.payload.imageUrl;
                    }
                    if (action.payload.tech) {
                        project.tech = action.payload.tech;
                    }
                    if (action.payload.title) {
                        project.title = action.payload.title;
                    }
                }
            });
        },

        deleteProjectFromUser(
            state: CurrentUserDataState,
            action: PayloadAction<{ projectId: string }>
        ) {
            const newProjectList = state.user!.projectList!.filter(
                (project) => project._id !== action.payload.projectId
            );
            state.user!.projectList = newProjectList ? newProjectList : [];
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
    addExperienceToUser,
    deleteExperienceFromUser,
    updateExperienceOfUser,
    addProjectToUser,
    deleteProjectFromUser,
    updateProjectOfUser,
} = CurrentUserDataSlice.actions;

export default CurrentUserDataSlice.reducer;
