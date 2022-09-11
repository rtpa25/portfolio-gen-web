interface Proficiency {
  id: number;
  name: 'beginner' | 'intermediate' | 'advanced';
}

export const proficiencyList: Proficiency[] = [
  {
    id: 1,
    name: 'beginner',
  },
  {
    id: 2,
    name: 'intermediate',
  },
  {
    id: 2,
    name: 'advanced',
  },
];
