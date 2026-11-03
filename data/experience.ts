import { ExperienceItem, EducationItem, TrainingItem } from '@/types';

// Most recent first. Roles, employers and dates follow the CV (Sibin_P_Resume, Oct 2026),
// except the Upcode internship, which follows its issued certificate (dated 20/10/2026);
// deliverables are limited to what the source code, commits or project documents support.
export const experiences: ExperienceItem[] = [
  {
    id: 'python-developer-ax',
    role: 'Python Full Stack Developer',
    company: 'AX Ventures',
    location: 'Calicut, Kerala',
    period: 'September 2026 – Present',
    startDate: '2026-09',
    status: 'Current role',
    description:
      'Working on the backend of BYCE, a gym membership platform for customers and gym owners in Kerala, built with Django REST Framework and PostgreSQL.',
    keyDeliverables: [
      'Documented the MVP backend architecture: Django app structure, PostgreSQL data model and REST API contract',
      'Specified authentication and role permissions, location-based gym discovery, the membership lifecycle, and Razorpay payment and booking flows'
    ],
    technologies: ['Python', 'Django REST Framework', 'PostgreSQL']
  },
  {
    id: 'software-developer-intern-upcode',
    role: 'Software Developer Intern',
    company: 'Upcode Software Labs L.L.P',
    location: 'Kannur, Kerala',
    period: '29 December 2025 – 2 September 2026',
    startDate: '2025-12-29',
    endDate: '2026-09-02',
    status: 'Completed',
    description:
      'Worked on the live Full Stack Development project at Upcode, a team-built CRM, translating business requirements into REST APIs and database models.',
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
  degree: 'B.Com',
  institution: 'MES Kalladi College',
  location: 'Mannarkkad, Kerala',
  year: '2023',
  status: 'Completed'
};

export const training: TrainingItem[] = [
  {
    title: 'Data Analysis (Python, Excel, Power BI, Machine Learning)',
    provider: 'Techolas Technologies',
    location: 'Calicut',
    period: 'Aug 2023 – May 2024',
    startDate: '2023-08',
    endDate: '2024-05'
  }
];
