export interface SocialLink {
    id: number;
    type:
        | 'Github'
        | 'Email'
        | 'Twitter'
        | 'Linkedin'
        | 'Youtube'
        | 'Website'
        | 'Medium';
}

export const SocialLinkTypes: SocialLink[] = [
    {
        id: 1,
        type: 'Github',
    },
    {
        id: 2,
        type: 'Email',
    },
    {
        id: 3,
        type: 'Twitter',
    },
    {
        id: 4,
        type: 'Linkedin',
    },
    {
        id: 5,
        type: 'Youtube',
    },
    {
        id: 6,
        type: 'Website',
    },
    {
        id: 7,
        type: 'Medium',
    },
];
