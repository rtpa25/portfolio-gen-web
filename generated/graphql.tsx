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
  avatar?: InputMaybe<Scalars['String']>;
  oneLiner?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
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

export type FieldErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type UserDataFragment = { __typename?: 'User', _id: string, email: string, username: string, createdAt: any, avatar: string, oneLiner?: string | null, status?: string | null, techList: Array<{ __typename?: 'Tech', _id: string, name: string, imageUrl: string, proficiency: string }>, projectList: Array<{ __typename?: 'Project', _id: string, createdAt: any, title: string, description: string, github: string, demo: string, tech: Array<string>, imageUrl: string }>, experienceList: Array<{ __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string }>, socialLinks: Array<{ __typename?: 'SocialLinks', _id: string, link: string, name: string, user: string }> };

export type CreateSocialLinkMutationVariables = Exact<{
  input: CreateSocialLinksInput;
}>;


export type CreateSocialLinkMutation = { __typename?: 'Mutation', createSocialLink: { __typename?: 'SocialLinkResponse', socialLink?: { __typename?: 'SocialLinks', _id: string, link: string, name: string, user: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: string, email: string, username: string, createdAt: any } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

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

export type UpdateUserProfileMutationVariables = Exact<{
  input: UpdateUserProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: string, email: string, username: string, createdAt: any, avatar: string, oneLiner?: string | null, status?: string | null, techList: Array<{ __typename?: 'Tech', _id: string, name: string, imageUrl: string, proficiency: string }>, projectList: Array<{ __typename?: 'Project', _id: string, createdAt: any, title: string, description: string, github: string, demo: string, tech: Array<string>, imageUrl: string }>, experienceList: Array<{ __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string }>, socialLinks: Array<{ __typename?: 'SocialLinks', _id: string, link: string, name: string, user: string }> } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', _id: string, email: string, username: string, createdAt: any, avatar: string, oneLiner?: string | null, status?: string | null, techList: Array<{ __typename?: 'Tech', _id: string, name: string, imageUrl: string, proficiency: string }>, projectList: Array<{ __typename?: 'Project', _id: string, createdAt: any, title: string, description: string, github: string, demo: string, tech: Array<string>, imageUrl: string }>, experienceList: Array<{ __typename?: 'Experience', _id: string, createdAt: any, title: string, company: string, from: any, to: any, current: boolean, description: string, user: string }>, socialLinks: Array<{ __typename?: 'SocialLinks', _id: string, link: string, name: string, user: string }> } | null };

export const AuthDataFragmentDoc = gql`
    fragment AuthData on User {
  _id
  email
  username
  createdAt
}
    `;
export const FieldErrorFragmentDoc = gql`
    fragment FieldError on FieldError {
  field
  message
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
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
    user {
      ...UserData
    }
    errors {
      ...FieldError
    }
  }
}
    ${UserDataFragmentDoc}
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