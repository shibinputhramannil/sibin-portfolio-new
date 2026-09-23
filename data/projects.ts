import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'icorp-erp',
    title: 'ICORP ERP & CRM Platform',
    tagline: 'Enterprise Resource Planning & Business Management Architecture',
    description:
      'An ongoing enterprise ERP and CRM platform engineered for scalable business management, tenant isolation, and modular services using Django REST Framework and PostgreSQL with planned AI capabilities.',
    longDescription:
      'IcorpERP is designed to streamline multi-department business operations through robust relational database schemas and RESTful web services. The platform implements multi-tenant data isolation, centralized company and contact directories, lead tracking, and authenticated API endpoints tested with Postman.',
    category: 'Full Stack',
    status: 'ONGOING',
    technologies: [
      'Django REST Framework',
      'Python',
      'PostgreSQL',
      'React',
      'REST APIs',
      'Git',
      'Postman',
      'Database Modeling'
    ],
    documentedModules: [
      'Tenant Isolation & Multi-organization boundaries',
      'Company Directory & Profile Management',
      'Contacts & People Relationship Mapping',
      'Leads Management & Qualification Pipeline',
      'JWT / Token-based Secure Authentication',
      'Standardized CRUD Endpoints & Error Handling',
      'PostgreSQL Schema Migrations & Integrity Constraints'
    ],
    architectureHighlights: [
      'Separation of concerns between business domain logic and API serialization',
      'Relational integrity enforced at database layer with foreign key indexing',
      'API contracts verified with Postman automated collections',
      'Extensible foundation engineered for future AI workflow integrations'
    ],
    githubUrl: 'https://github.com/shibinputhramannil/IcorpERP',
    featured: true
  },
  {
    id: 'face-recognition-pca-ann',
    title: 'Face Recognition Pipeline (PCA & ANN)',
    tagline: 'Computer Vision & Deep Learning Feature Extraction',
    description:
      'End-to-end face recognition and classification system implementing eigenface dimensionality reduction with surrogate covariance PCA and a trained Artificial Neural Network (ANN) classifier.',
    longDescription:
      'Developed during the Artificial Intelligence Internship at Internship Studio, Pune. The system converts raw facial images into normalized grayscale vectors, projects them into a low-dimensional subspace using surrogate covariance PCA, and trains a multi-layer backpropagation neural network. It includes confidence thresholding to distinguish non-enrolled individuals.',
    category: 'AI / ML',
    status: 'COMPLETED',
    technologies: [
      'Python',
      'NumPy',
      'OpenCV',
      'Matplotlib',
      'PCA (Eigenfaces)',
      'Artificial Neural Networks',
      'Backpropagation'
    ],
    documentedModules: [
      'Image preprocessing and flattened grayscale vector normalization',
      'Surrogate covariance matrix calculation for efficient eigenface decomposition',
      'Artificial Neural Network (ANN) classifier training with backpropagation',
      'Hyperparameter validation across multiple k-eigenvalue dimensions (k=5 to 25)',
      'Confidence-threshold inference pipeline rejecting non-enrolled faces'
    ],
    architectureHighlights: [
      'Avoids high memory overhead of full covariance matrices via surrogate method',
      'Generates automated accuracy vs. k-dimension comparative graphs',
      'CLI testing tool supporting arbitrary input images and custom confidence thresholds'
    ],
    githubUrl: 'https://github.com/shibinputhramannil/Face_Recognition-PCA-ANN',
    featured: true
  },
  {
    id: 'corridor-b2b',
    title: 'CORRIDOR B2B Trade & Commerce Platform',
    tagline: 'High-Performance B2B Trading & Procurement Application',
    description:
      'Modern B2B trade and quotation management application built with Next.js App Router, Redux Toolkit, and Tailwind CSS, featuring structured deal-rooms and multi-vendor RFQ workflows.',
    longDescription:
      'CORRIDOR addresses enterprise procurement needs with dedicated modules for quotation requests (RFQ), multi-supplier product comparison matrices, collaborative negotiation deal-rooms, and real-time trade analytics.',
    category: 'Full Stack',
    status: 'COMPLETED',
    technologies: [
      'Next.js 14 (App Router)',
      'TypeScript',
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Lucide React'
    ],
    documentedModules: [
      'Deal-Room negotiation and offer exchange interface',
      'Request for Quotation (RFQ) multi-vendor intake workflows',
      'Multi-attribute product side-by-side comparison matrix',
      'Trade inquiry dispatcher and audit tracking',
      'Centralized Redux slice state management with strict TypeScript typing'
    ],
    architectureHighlights: [
      'Server-driven Next.js layout composition paired with client-side reactive state',
      'Design tokens unified with Tailwind utility classes for consistent UI',
      'Type-safe Redux actions ensuring deterministic procurement states'
    ],
    githubUrl: 'https://github.com/shibinputhramannil/CORRIDOR',
    featured: true
  },
  {
    id: 'django-flipkart-ecommerce',
    title: 'Django E-Commerce Application',
    tagline: 'Database-Driven Product Catalog & Shopping Platform',
    description:
      'Comprehensive e-commerce web platform engineered with Python and Django, implementing product browsing, category filtering, cart management, and authenticated order flows.',
    longDescription:
      'A practical web application built during full stack development training. Implements Django ORM models for products, categories, cart items, and customer profiles, with server-side rendered responsive templates and CSRF-protected forms.',
    category: 'Backend',
    status: 'COMPLETED',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL / SQLite',
      'HTML5',
      'CSS3',
      'JavaScript'
    ],
    documentedModules: [
      'Dynamic product catalog with category taxonomy',
      'Session-backed shopping cart and order line management',
      'User registration, authentication, and order history',
      'Django Admin panel customization for product catalog curation'
    ],
    architectureHighlights: [
      'Relational database normalization for products, orders, and line items',
      'Django ORM query optimizations to prevent N+1 query overhead'
    ],
    featured: false
  },
  {
    id: 'python-shopping-list',
    title: 'Python Shopping List & Inventory Tool',
    tagline: 'Modular CLI & Core Data Structures Project',
    description:
      'A focused Python software project implementing object-oriented programming, data structures, and persistent file operations for item tracking and inventory management.',
    category: 'Backend',
    status: 'COMPLETED',
    technologies: [
      'Python',
      'OOP Principles',
      'Data Structures',
      'File I/O',
      'Unit Logic'
    ],
    documentedModules: [
      'Item cataloging and quantity tracking',
      'Persistent data serializing and file storage',
      'Input sanitization and menu-driven command interface'
    ],
    architectureHighlights: [
      'Clean separation between data model classes and user interface controllers',
      'Robust error handling for invalid operations and storage exceptions'
    ],
    featured: false
  }
];
