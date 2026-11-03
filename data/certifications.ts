import { CertificationItem } from '@/types';

export const certifications: CertificationItem[] = [
  {
    // Every field follows the issued certificate (dated 20/10/2026).
    id: 'cert-upcode-internship',
    title: 'Software Developer Internship',
    issuer: 'Upcode Software Labs L.L.P',
    period: '29 December 2025 – 2 September 2026',
    issueDate: 'October 2026',
    status: 'Completed',
    description:
      'Certifies work as a Software Developer Intern on the live Full Stack Development project at Upcode, with assigned projects completed and important deadlines met.',
    topics: [
      'Live project in Full Stack Development',
      'Frontend: HTML, CSS, Bootstrap, JavaScript, ReactJS, Redux, Next.js, TypeScript',
      'Backend: Python, Django, Flask, RDBMS',
      'Version control: Git'
    ],
    scan: {
      src: '/certificates/upcode-software-developer-internship.webp',
      width: 1600,
      height: 1132,
      alt: 'Internship certificate from Upcode Software Labs L.L.P, dated 20/10/2026, certifying that Sibin P worked as a Software Developer Intern from 29/12/2025 to 02/09/2026.'
    },
    pdf: '/certificates/upcode-software-developer-internship.pdf'
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
