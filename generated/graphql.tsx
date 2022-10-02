import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateExperienceInput = {
  company: Scalars['String'];
  current?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  from: Scalars['DateTime'];
  title: Scalars['String'];
  to: Scalars['DateTime'];
};

export type CreateProjectInput = {
  demo: Scalars['String'];
  description: Scalars['String'];
  github: Scalars['String'];
  imageUrl: Scalars['String'];
  tech: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateSocialLinksInput = {
  link: Scalars['String'];
  name: Scalars['String'];
};

export type CreateTechInput = {
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  proficiency: Scalars['String'];
};

export type Experience = {
  __typename?: 'Experience';
  _id: Scalars['String'];
  company: Scalars['String'];
  createdAt: Scalars['DateTime'];
  current: Scalars['Boolean'];
  description: Scalars['String'];
  from: Scalars['DateTime'];
  title: Scalars['String'];
  to: Scalars['DateTime'];
  user: Scalars['String'];
};

export type ExperienceResponse = {
  __typename?: 'ExperienceResponse';
  errors?: Maybe<Array<FieldError>>;
  experience?: Maybe<Experience>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createExperience: ExperienceResponse;
  createProject: ProjectResponse;
  createSocialLink: SocialLinkResponse;
  createTech: TechResponse;
  deleteExperience: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteSocialLink: Scalars['Boolean'];
  deleteTech: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  signIn: UserResponse;
  signOut: Scalars['Boolean'];
  signUp: UserResponse;
  updateExperience: ExperienceResponse;
  updateProject: ProjectResponse;
  updateTech: TechResponse;
  updateUserProfile: UserResponse;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateExperienceArgs = {
  input: CreateExperienceInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateSocialLinkArgs = {
  input: CreateSocialLinksInput;
};


export type MutationCreateTechArgs = {
  input: CreateTechInput;
};


export type MutationDeleteExperienceArgs = {
  expId: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['String'];
};


export type MutationDeleteSocialLinkArgs = {
  linkId: Scalars['String'];
};


export type MutationDeleteTechArgs = {
  techId: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateExperienceArgs = {
  input: UpdateExperienceInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateTechArgs = {
  input: UpdateTechInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  demo: Scalars['String'];
  description: Scalars['String'];
  github: Scalars['String'];
  imageUrl: Scalars['String'];
  tech: Array<Scalars['String']>;
  title: Scalars['String'];
  user: Scalars['String'];
};

export type ProjectResponse = {
  __typename?: 'ProjectResponse';
  errors?: Maybe<Array<FieldError>>;
  project?: Maybe<Project>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SocialLinkResponse = {
  __typename?: 'SocialLinkResponse';
  errors?: Maybe<Array<FieldError>>;
  socialLink?: Maybe<SocialLinks>;
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  _id: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
  user: Scalars['String'];
};

export type Tech = {
  __typename?: 'Tech';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  proficiency: Scalars['String'];
  user: Scalars['String'];
};

export type TechResponse = {
  __typename?: 'TechResponse';
  errors?: Maybe<Array<FieldError>>;
  tech?: Maybe<Tech>;
};

export type UpdateExperienceInput = {
  _id: Scalars['String'];
  company?: InputMaybe<Scalars['String']>;
  current?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateProjectInput = {
  _id: Scalars['String'];
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  tech?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTechInput = {
  _id: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
  proficiency?: InputMaybe<Scalars['String']>;
};

export type UpdateUserProfileInput = {
  about?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  oneLiner?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  about?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  experienceList: Array<Experience>;
  oneLiner?: Maybe<Scalars['String']>;
  projectList: Array<Project>;
  socialLinks: Array<SocialLinks>;
  status?: Maybe<Scalars['String']>;
  techList: Array<Tech>;
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type AuthDataFragment = { __typename?: 'User', _id: string, email: string, username: string, createdAt: any };

export type ExperienceDataFragment = { __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string };

export type FieldErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type ProjectDataFragment = { __typename?: 'Project', _id: string, createdAt: any, title: string, description: string, github: string, demo: string, tech: Array<string>, imageUrl: string, user: string };

export type TechDataFragment = { __typename?: 'Tech', _id: string, name: string, createdAt: any, imageUrl: string, proficiency: string, user: string };

export type UserDataFragment = { __typename?: 'User', _id: string, email: string, username: string, createdAt: any, avatar: string, oneLiner?: string | null, status?: string | null, about?: string | null, techList: Array<{ __typename?: 'Tech', _id: string, name: string, imageUrl: string, proficiency: string }>, projectList: Array<{ __typename?: 'Project', _id: string, createdAt: any, title: string, description: string, github: string, demo: string, tech: Array<string>, imageUrl: string }>, experienceList: Array<{ __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string }>, socialLinks: Array<{ __typename?: 'SocialLinks', _id: string, link: string, name: string, user: string }> };

export type CreateSocialLinkMutationVariables = Exact<{
  input: CreateSocialLinksInput;
}>;


export type CreateSocialLinkMutation = { __typename?: 'Mutation', createSocialLink: { __typename?: 'SocialLinkResponse', socialLink?: { __typename?: 'SocialLinks', _id: string, link: string, name: string, user: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'ProjectResponse', project?: { __typename?: 'Project', _id: string, createdAt: any, title: string, description: string, github: string, demo: string, tech: Array<string>, imageUrl: string, user: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type AddTechMutationVariables = Exact<{
  input: CreateTechInput;
}>;


export type AddTechMutation = { __typename?: 'Mutation', createTech: { __typename?: 'TechResponse', tech?: { __typename?: 'Tech', _id: string, name: string, createdAt: any, imageUrl: string, proficiency: string, user: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: string, email: string, username: string, createdAt: any } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type CreateExperienceMutationVariables = Exact<{
  input: CreateExperienceInput;
}>;


export type CreateExperienceMutation = { __typename?: 'Mutation', createExperience: { __typename?: 'ExperienceResponse', experience?: { __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type DeleteExperienceMutationVariables = Exact<{
  expId: Scalars['String'];
}>;


export type DeleteExperienceMutation = { __typename?: 'Mutation', deleteExperience: boolean };

export type DeleteTechMutationVariables = Exact<{
  techId: Scalars['String'];
}>;


export type DeleteTechMutation = { __typename?: 'Mutation', deleteTech: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  input: SignInInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', signIn: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: string, email: string, username: string, createdAt: any } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', signOut: boolean };

export type RegisterMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', signUp: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: string, email: string, username: string, createdAt: any } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type UpdateExperienceMutationVariables = Exact<{
  input: UpdateExperienceInput;
}>;


export type UpdateExperienceMutation = { __typename?: 'Mutation', updateExperience: { __typename?: 'ExperienceResponse', experience?: { __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type UpdateTechMutationVariables = Exact<{
  input: UpdateTechInput;
}>;


export type UpdateTechMutation = { __typename?: 'Mutation', updateTech: { __typename?: 'TechResponse', tech?: { __typename?: 'Tech', _id: string, name: string, createdAt: any, imageUrl: string, proficiency: string, user: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type UpdateUserProfileMutationVariables = Exact<{
  input: UpdateUserProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: string, about?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', _id: string, email: string, username: string, createdAt: any, avatar: string, oneLiner?: string | null, status?: string | null, about?: string | null, techList: Array<{ __typename?: 'Tech', _id: string, name: string, imageUrl: string, proficiency: string }>, projectList: Array<{ __typename?: 'Project', _id: string, createdAt: any, title: string, description: string, github: string, demo: string, tech: Array<string>, imageUrl: string }>, experienceList: Array<{ __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string }>, socialLinks: Array<{ __typename?: 'SocialLinks', _id: string, link: string, name: string, user: string }> } | null };

export const AuthDataFragmentDoc = gql`
    fragment AuthData on User {
  _id
  email
  username
  createdAt
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on Experience {
  _id
  createdAt
  title
  company
  from
  to
  current
  description
  user
}
    `;
export const FieldErrorFragmentDoc = gql`
    fragment FieldError on FieldError {
  field
  message
}
    `;
export const ProjectDataFragmentDoc = gql`
    fragment ProjectData on Project {
  _id
  createdAt
  title
  description
  github
  demo
  tech
  imageUrl
  user
}
    `;
export const TechDataFragmentDoc = gql`
    fragment TechData on Tech {
  _id
  name
  createdAt
  imageUrl
  proficiency
  user
}
    `;
export const UserDataFragmentDoc = gql`
    fragment UserData on User {
  _id
  email
  username
  createdAt
  avatar
  oneLiner
  status
  about
  techList {
    _id
    name
    imageUrl
    proficiency
  }
  projectList {
    _id
    createdAt
    title
    description
    github
    demo
    tech
    imageUrl
  }
  experienceList {
    _id
    createdAt
    title
    company
    from
    to
    current
    description
    user
  }
  socialLinks {
    _id
    link
    name
    user
  }
}
    `;
export const CreateSocialLinkDocument = gql`
    mutation CreateSocialLink($input: CreateSocialLinksInput!) {
  createSocialLink(input: $input) {
    socialLink {
      _id
      link
      name
      user
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateSocialLinkMutationFn = Apollo.MutationFunction<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;

/**
 * __useCreateSocialLinkMutation__
 *
 * To run a mutation, you first call `useCreateSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSocialLinkMutation, { data, loading, error }] = useCreateSocialLinkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSocialLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>(CreateSocialLinkDocument, options);
      }
export type CreateSocialLinkMutationHookResult = ReturnType<typeof useCreateSocialLinkMutation>;
export type CreateSocialLinkMutationResult = Apollo.MutationResult<CreateSocialLinkMutation>;
export type CreateSocialLinkMutationOptions = Apollo.BaseMutationOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;
export const CreateProjectDocument = gql`
    mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    project {
      ...ProjectData
    }
    errors {
      ...FieldError
    }
  }
}
    ${ProjectDataFragmentDoc}
${FieldErrorFragmentDoc}`;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const AddTechDocument = gql`
    mutation AddTech($input: CreateTechInput!) {
  createTech(input: $input) {
    tech {
      ...TechData
    }
    errors {
      ...FieldError
    }
  }
}
    ${TechDataFragmentDoc}
${FieldErrorFragmentDoc}`;
export type AddTechMutationFn = Apollo.MutationFunction<AddTechMutation, AddTechMutationVariables>;

/**
 * __useAddTechMutation__
 *
 * To run a mutation, you first call `useAddTechMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTechMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTechMutation, { data, loading, error }] = useAddTechMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTechMutation(baseOptions?: Apollo.MutationHookOptions<AddTechMutation, AddTechMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTechMutation, AddTechMutationVariables>(AddTechDocument, options);
      }
export type AddTechMutationHookResult = ReturnType<typeof useAddTechMutation>;
export type AddTechMutationResult = Apollo.MutationResult<AddTechMutation>;
export type AddTechMutationOptions = Apollo.BaseMutationOptions<AddTechMutation, AddTechMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    user {
      ...AuthData
    }
    errors {
      ...FieldError
    }
  }
}
    ${AuthDataFragmentDoc}
${FieldErrorFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateExperienceDocument = gql`
    mutation CreateExperience($input: CreateExperienceInput!) {
  createExperience(input: $input) {
    experience {
      ...ExperienceData
    }
    errors {
      ...FieldError
    }
  }
}
    ${ExperienceDataFragmentDoc}
${FieldErrorFragmentDoc}`;
export type CreateExperienceMutationFn = Apollo.MutationFunction<CreateExperienceMutation, CreateExperienceMutationVariables>;

/**
 * __useCreateExperienceMutation__
 *
 * To run a mutation, you first call `useCreateExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExperienceMutation, { data, loading, error }] = useCreateExperienceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExperienceMutation(baseOptions?: Apollo.MutationHookOptions<CreateExperienceMutation, CreateExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExperienceMutation, CreateExperienceMutationVariables>(CreateExperienceDocument, options);
      }
export type CreateExperienceMutationHookResult = ReturnType<typeof useCreateExperienceMutation>;
export type CreateExperienceMutationResult = Apollo.MutationResult<CreateExperienceMutation>;
export type CreateExperienceMutationOptions = Apollo.BaseMutationOptions<CreateExperienceMutation, CreateExperienceMutationVariables>;
export const DeleteExperienceDocument = gql`
    mutation DeleteExperience($expId: String!) {
  deleteExperience(expId: $expId)
}
    `;
export type DeleteExperienceMutationFn = Apollo.MutationFunction<DeleteExperienceMutation, DeleteExperienceMutationVariables>;

/**
 * __useDeleteExperienceMutation__
 *
 * To run a mutation, you first call `useDeleteExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExperienceMutation, { data, loading, error }] = useDeleteExperienceMutation({
 *   variables: {
 *      expId: // value for 'expId'
 *   },
 * });
 */
export function useDeleteExperienceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExperienceMutation, DeleteExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExperienceMutation, DeleteExperienceMutationVariables>(DeleteExperienceDocument, options);
      }
export type DeleteExperienceMutationHookResult = ReturnType<typeof useDeleteExperienceMutation>;
export type DeleteExperienceMutationResult = Apollo.MutationResult<DeleteExperienceMutation>;
export type DeleteExperienceMutationOptions = Apollo.BaseMutationOptions<DeleteExperienceMutation, DeleteExperienceMutationVariables>;
export const DeleteTechDocument = gql`
    mutation DeleteTech($techId: String!) {
  deleteTech(techId: $techId)
}
    `;
export type DeleteTechMutationFn = Apollo.MutationFunction<DeleteTechMutation, DeleteTechMutationVariables>;

/**
 * __useDeleteTechMutation__
 *
 * To run a mutation, you first call `useDeleteTechMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTechMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTechMutation, { data, loading, error }] = useDeleteTechMutation({
 *   variables: {
 *      techId: // value for 'techId'
 *   },
 * });
 */
export function useDeleteTechMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTechMutation, DeleteTechMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTechMutation, DeleteTechMutationVariables>(DeleteTechDocument, options);
      }
export type DeleteTechMutationHookResult = ReturnType<typeof useDeleteTechMutation>;
export type DeleteTechMutationResult = Apollo.MutationResult<DeleteTechMutation>;
export type DeleteTechMutationOptions = Apollo.BaseMutationOptions<DeleteTechMutation, DeleteTechMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: SignInInput!) {
  signIn(input: $input) {
    user {
      ...AuthData
    }
    errors {
      ...FieldError
    }
  }
}
    ${AuthDataFragmentDoc}
${FieldErrorFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  signOut
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: SignUpInput!) {
  signUp(input: $input) {
    user {
      ...AuthData
    }
    errors {
      ...FieldError
    }
  }
}
    ${AuthDataFragmentDoc}
${FieldErrorFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateExperienceDocument = gql`
    mutation UpdateExperience($input: UpdateExperienceInput!) {
  updateExperience(input: $input) {
    experience {
      _id
      createdAt
      title
      company
      from
      to
      current
      description
      user
    }
    errors {
      field
      message
    }
  }
}
    `;
export type UpdateExperienceMutationFn = Apollo.MutationFunction<UpdateExperienceMutation, UpdateExperienceMutationVariables>;

/**
 * __useUpdateExperienceMutation__
 *
 * To run a mutation, you first call `useUpdateExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExperienceMutation, { data, loading, error }] = useUpdateExperienceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateExperienceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExperienceMutation, UpdateExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExperienceMutation, UpdateExperienceMutationVariables>(UpdateExperienceDocument, options);
      }
export type UpdateExperienceMutationHookResult = ReturnType<typeof useUpdateExperienceMutation>;
export type UpdateExperienceMutationResult = Apollo.MutationResult<UpdateExperienceMutation>;
export type UpdateExperienceMutationOptions = Apollo.BaseMutationOptions<UpdateExperienceMutation, UpdateExperienceMutationVariables>;
export const UpdateTechDocument = gql`
    mutation UpdateTech($input: UpdateTechInput!) {
  updateTech(input: $input) {
    tech {
      ...TechData
    }
    errors {
      ...FieldError
    }
  }
}
    ${TechDataFragmentDoc}
${FieldErrorFragmentDoc}`;
export type UpdateTechMutationFn = Apollo.MutationFunction<UpdateTechMutation, UpdateTechMutationVariables>;

/**
 * __useUpdateTechMutation__
 *
 * To run a mutation, you first call `useUpdateTechMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTechMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTechMutation, { data, loading, error }] = useUpdateTechMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTechMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTechMutation, UpdateTechMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTechMutation, UpdateTechMutationVariables>(UpdateTechDocument, options);
      }
export type UpdateTechMutationHookResult = ReturnType<typeof useUpdateTechMutation>;
export type UpdateTechMutationResult = Apollo.MutationResult<UpdateTechMutation>;
export type UpdateTechMutationOptions = Apollo.BaseMutationOptions<UpdateTechMutation, UpdateTechMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
    user {
      _id
      about
    }
    errors {
      ...FieldError
    }
  }
}
    ${FieldErrorFragmentDoc}`;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;