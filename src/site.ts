// Everything personal lives here. Run `npm run todos` to list what still needs filling in.

export const site = {
  name: 'Doğukan Teber',
  firstName: 'Doğukan',
  title: 'Doğukan Teber',
  description:
    'Software engineer. I build things and write about engineering, AI, HPC, entrepreneurship, and life.',
  // Rendered as HTML.
  bio: [
    'I’m a software engineer at <a href="https://www.woodwellclimate.org/">Woodwell Climate Research Center</a>, where I build full-stack applications, internal tools, and compute infrastructure that enable scientists to do their research.',
    'On the side, I solve my own problems and build open-source projects to pursue my entrepreneurial ambitions.',
    'I write about technical problems, walk through some of my projects, and share the mistakes I’ve made and the lessons I’ve learned from my experiments.',
  ],
  email: 'dteber@woodwellclimate.org',
  github: 'https://github.com/dogukanteber',
  linkedin: 'https://www.linkedin.com/in/dogukanteber',
} as const;

export const hasEmail = site.email.includes('@');

export const topics = {
  ai: { label: 'AI', description: 'Working with AI without outsourcing the thinking.' },
  engineering: { label: 'Engineering', description: 'The craft of building software that lasts.' },
  'goals-and-life': { label: 'Goals & life', description: 'Habits, goals, and everything outside the editor.' },
  entrepreneurship: { label: 'Entrepreneurship', description: 'Building products and learning from the ones that fail.' },
  'machine-learning': { label: 'Machine learning', description: 'Algorithms implemented from first principles.' },
  hpc: { label: 'HPC', description: 'Parallel programming, MPI, and scientific computing.' },
  'open-source': { label: 'Open source', description: 'Contributing to and maintaining public projects.' },
} as const;

export type Topic = keyof typeof topics;
export const topicIds = Object.keys(topics) as [Topic, ...Topic[]];
