import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    description: 'Languages used for backend systems, scripting, and web development.',
    skills: [
      { name: 'Python', note: 'Primary backend language for Django & AI pipelines' },
      { name: 'SQL', note: 'Relational queries, schema design, and data joins' },
      { name: 'JavaScript', note: 'ES6+ modern web development and DOM interactivity' },
      { name: 'TypeScript', note: 'Type-safe frontend logic and interface contracts (Basic)' },
      { name: 'HTML5', note: 'Semantic and accessible markup structures' },
      { name: 'CSS3', note: 'Modern layouts, flexbox, grid, and responsive styling' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Server-side engineering, RESTful interfaces, and business logic implementation.',
    skills: [
      { name: 'Django', note: 'Batteries-included web framework, ORM, and admin' },
      { name: 'Django REST Framework', note: 'Serialization, viewsets, authentication, and API endpoints' },
      { name: 'REST API Development', note: 'Clean HTTP contracts, status codes, and JSON payloads' },
      { name: 'Flask', note: 'Lightweight micro-framework for focused services' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Building interactive, responsive, and component-driven user interfaces.',
    skills: [
      { name: 'React', note: 'Component lifecycle, hooks, state management, and JSX' },
      { name: 'Next.js', note: 'App Router architecture and server-rendered components' },
      { name: 'Tailwind CSS', note: 'Utility-first modern responsive styling' },
      { name: 'Redux Toolkit', note: 'Predictable centralized state management' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    description: 'Relational data modeling, query optimization, and persistent stores.',
    skills: [
      { name: 'PostgreSQL', note: 'Production relational database for ERP & CRM solutions' },
      { name: 'MySQL', note: 'Relational database schema modeling and queries' },
      { name: 'SQLite', note: 'Embedded database for rapid prototyping and local testing' },
      { name: 'MongoDB', note: 'Document-oriented database concepts' }
    ]
  },
  {
    id: 'data-ai',
    name: 'Data & Applied AI',
    description: 'Applied machine learning, dimensionality reduction, and neural modeling.',
    skills: [
      { name: 'NumPy', note: 'Multidimensional array operations and matrix computations' },
      { name: 'Pandas', note: 'Data wrangling, cleaning, and tabular transformations' },
      { name: 'Principal Component Analysis (PCA)', note: 'Surrogate covariance matrix & eigenface extraction' },
      { name: 'Artificial Neural Networks (ANN)', note: 'Backpropagation modeling and multi-class classification' },
      { name: 'OpenCV', note: 'Computer vision preprocessing and image vectorization' }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    description: 'Modern development environment, version control, and API testing utilities.',
    skills: [
      { name: 'Git', note: 'Branching, commit history, and collaboration workflows' },
      { name: 'GitHub', note: 'Remote repositories, pull requests, and documentation' },
      { name: 'Postman', note: 'REST API endpoint testing, validation, and documentation' },
      { name: 'VS Code', note: 'Primary integrated development environment' },
      { name: 'PyCharm', note: 'Python & Django dedicated IDE' },
      { name: 'Jupyter Notebook', note: 'Interactive experimentation for ML and data exploration' }
    ]
  },
  {
    id: 'core-cs',
    name: 'Core Computer Science',
    description: 'Fundamental principles that ensure scalable and maintainable software.',
    skills: [
      { name: 'Data Structures & Algorithms', note: 'Arrays, lists, dictionaries, sorting, and algorithmic efficiency' },
      { name: 'Object-Oriented Programming (OOP)', note: 'Encapsulation, inheritance, modularity, and clean classes' },
      { name: 'Database Management & Normalization', note: 'Schema design, foreign key constraints, and index hygiene' },
      { name: 'Problem Solving & Architecture', note: 'Factual debugging, requirement analysis, and reliable code' }
    ]
  }
];
