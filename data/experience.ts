import { ExperienceItem, EducationItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'crm-intern-upcode',
    role: 'CRM Developer Intern',
    company: 'Upcode Software Labs Pvt. Ltd.',
    location: 'Kerala, India',
    period: '24 July 2026 – 18 September 2026',
    startDate: '2026-07-24',
    endDate: '2026-09-18',
    status: 'Completed',
    description:
      'Contributed directly to the engineering and development of a live production-grade CRM project, translating operational business requirements into clean REST APIs and database models.',
    keyDeliverables: [
      'Engineered backend endpoints and relational schemas using Django and Django REST Framework',
      'Implemented data persistence and schema relationships in PostgreSQL',
      'Assisted in frontend integration with ReactJS for user interaction flows',
      'Collaborated on business requirement analysis to deliver practical software solutions'
    ],
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'ReactJS', 'Git', 'Postman']
  },
  {
    id: 'ai-intern-studio',
    role: 'Artificial Intelligence Intern',
    company: 'Internship Studio',
    location: 'Pune, India',
    period: '6 April 2026 – 9 August 2026',
    startDate: '2026-04-06',
    endDate: '2026-08-09',
    status: 'Completed',
    description:
      'Engineered an applied computer vision and machine learning face recognition pipeline, implementing mathematical preprocessing and neural network classification from scratch.',
    keyDeliverables: [
      'Executed PCA-based dimensionality reduction via surrogate covariance method (Eigenfaces)',
      'Trained an Artificial Neural Network (ANN) classification model using backpropagation',
      'Evaluated model accuracy trade-offs across variable k-eigenvalue dimensions',
      'Implemented confidence thresholding for rejecting unregistered facial profiles'
    ],
    technologies: ['Python', 'NumPy', 'OpenCV', 'Matplotlib', 'PCA', 'ANN', 'Jupyter']
  }
];

export const education: EducationItem = {
  degree: 'Bachelor Degree',
  institution: 'MES Kalladi College',
  location: 'Mannarkkad, Kerala',
  status: 'Completed',
  details: [
    'Solid foundational coursework in computer science concepts, computational logic, and problem solving',
    'Active participation in technology seminars and collaborative software development initiatives'
  ]
};
