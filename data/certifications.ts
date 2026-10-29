import { CertificationItem } from '@/types';

export const certifications: CertificationItem[] = [
  {
    id: 'cert-python-full-stack',
    title: 'Python Full Stack Developer',
    issuer: 'Upcode Software Labs',
    period: '12 January 2026 – 18 September 2026',
    issueDate: 'September 2026',
    status: 'Completed',
    description:
      'Rigorous multi-month full stack software engineering curriculum covering end-to-end web architecture, relational database management, and professional developer tooling.',
    topics: [
      'Python Programming & Object-Oriented Design',
      'Django & Django REST Framework (DRF)',
      'Frontend Development (HTML, CSS, JavaScript, React)',
      'Relational Database Modeling with PostgreSQL & MySQL',
      'REST API Design, Serialization & Postman Testing',
      'Git Version Control & GitHub Collaborative Workflows',
      'Web Deployment Concepts & Server Environments'
    ],
    image: '/certificates/python-full-stack-developer.svg'
  },
  {
    id: 'cert-crm-internship',
    title: 'CRM Developer Internship',
    issuer: 'Upcode Software Labs Pvt. Ltd.',
    period: '24 July 2026 – 18 September 2026',
    issueDate: 'September 2026',
    status: 'Completed',
    description:
      'Hands-on industry internship focused on enterprise CRM architecture, relational business entity modeling, and RESTful web service implementation.',
    topics: [
      'Live CRM System Development',
      'Django REST Framework Backend Services',
      'PostgreSQL Relational Schema Integration',
      'ReactJS User Interface Coordination',
      'Business Requirement Analysis & Pragmatic Solutions'
    ],
    image: '/certificates/crm-developer-internship.svg'
  },
  {
    id: 'cert-ai-internship',
    title: 'Artificial Intelligence Internship',
    issuer: 'Internship Studio, Pune',
    period: '6 April 2026 – 9 August 2026',
    issueDate: 'August 2026',
    status: 'Completed',
    description:
      'Intensive internship focused on machine learning fundamentals, dimensionality reduction techniques, and computer vision neural network modeling.',
    topics: [
      'Face Recognition Pipeline Construction',
      'Surrogate Covariance Principal Component Analysis (PCA)',
      'Artificial Neural Network (ANN) Classification',
      'Backpropagation Algorithm Implementation',
      'Model Accuracy Evaluation & Dimensionality Optimization'
    ],
    image: '/certificates/artificial-intelligence-internship.svg'
  }
];
