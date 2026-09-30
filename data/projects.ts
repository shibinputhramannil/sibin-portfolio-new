import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'icorp-erp',
    title: 'ICORP ERP Platform',
    tagline: 'Multi-Tenant Enterprise Resource Planning & Operations Architecture',
    description:
      'A production-ready, multi-tenant Enterprise Resource Planning system engineered for corporate business management, tenant isolation, and modular services using Django REST Framework and PostgreSQL with integrated AI Assistant capabilities.',
    longDescription:
      'ICORP ERP is a production-ready enterprise platform uniting multi-company business boundaries, department and employee directories, advanced inventory logistics, full lifecycle sales and purchasing, strict double-entry finance, interactive workspace collaboration (real-time notes, email, document center, calendar), and an integrated AI operational assistant into a unified corporate system.',
    category: 'Full Stack',
    status: 'COMPLETED',
    technologies: [
      'Django 6.1',
      'Django REST Framework',
      'PostgreSQL 16',
      'React (Vite)',
      'Material-UI (MUI)',
      'Docker & Docker Compose',
      'REST APIs',
      'Postman',
      'Database Modeling',
      'AI Operational Assistant'
    ],
    documentedModules: [
      'Multi-Tenant Isolation & Multi-company boundaries',
      'Department & Employee Directory Management',
      'Dynamic Inventory Control & Stock Valuation',
      'Sales Orders, Invoicing & Payment Tracking',
      'Purchase Orders & Supplier Workflows',
      'Double-Entry Financial Accounting & General Ledgers',
      'Integrated AI Operational Assistant',
      'Workspace Collaboration (Notes, Calendar, Documents)'
    ],
    architectureHighlights: [
      'Strict multi-tenant boundaries with foreign key indexing and relational integrity constraints',
      'Decoupled service layer between core business rules and REST API serialization',
      'Automated test suites validating multi-tenant permissions and transaction safety',
      'Docker multi-container orchestration for backend API, PostgreSQL, and frontend'
    ],
    githubUrl: 'https://github.com/shibinputhramannil/IcorpERP',
    featured: true
  },
  {
    id: 'enterprise-crm',
    title: 'Enterprise CRM Platform',
    tagline: 'Customer Relationship Management & Automated Sales Pipeline',
    description:
      'A full-stack, enterprise-grade CRM system featuring automated lead management, multi-stage sales deals, customer support ticketing, and Twilio-powered direct and bridge voice call integrations.',
    longDescription:
      'Developed as a production CRM application with React 19/Vite frontend and Django 6 REST Framework backend. It delivers comprehensive customer relationship lifecycle management including company directories, lead capture and qualification, deal stage progression, customer support ticketing, activity audit timelines, and programmatic voice calling via Twilio API with automated simulation fallback.',
    category: 'Full Stack',
    status: 'COMPLETED',
    technologies: [
      'React 19',
      'Vite',
      'Material-UI (MUI)',
      'Django 6',
      'Django REST Framework',
      'PostgreSQL 17',
      'SimpleJWT',
      'Twilio Voice API',
      'Docker Compose',
      'GitHub Actions CI/CD'
    ],
    documentedModules: [
      'Companies Directory & Organizational Hierarchy',
      'Leads Management & Qualification Pipeline',
      'Deals Pipeline with Stage Progression Tracking',
      'Customer Support Tickets & Escalation Workflows',
      'Twilio Voice Calling (Direct Call & Bridge Call API)',
      'Activity Timeline, Task Scheduling & Reminders',
      'SimpleJWT Authentication & Role-Based Access Control',
      'GitHub Actions Automated CI/CD Pipelines'
    ],
    architectureHighlights: [
      'Twilio telecommunication integration supporting live calls with resilient simulated mode fallback',
      'Normalized PostgreSQL 17 relational schemas across leads, deals, tickets, and calls',
      'Role-based permission guards (Admin, Sales Reps, Managers) with JWT token refresh',
      'Containerized multi-service deployment with Docker Compose and GitHub Actions testing'
    ],
    githubUrl: 'https://github.com/shibinputhramannil',
    featured: true
  },
  {
    id: 'transt-ecommerce',
    title: 'TRANST Botanical E-Commerce Platform',
    tagline: 'Production-Ready Botanical Lifestyle E-Commerce with Django REST & Redux Toolkit',
    description:
      'A production-ready botanical lifestyle e-commerce application engineered with Django REST Framework and React/Redux Toolkit, featuring stateless JWT auth, server-authoritative cart validation, and atomic checkout transactions.',
    longDescription:
      'TRANST is a full-stack botanical e-commerce application providing an end-to-end customer journey from dynamic catalog discovery, multi-faceted filtering, and server-authoritative shopping cart management to secure checkout with atomic database transactions (transaction.atomic()) and automated stock decrementation. Powered by Django REST Framework and React with Redux Toolkit and Tailwind CSS.',
    category: 'Full Stack',
    status: 'COMPLETED',
    technologies: [
      'Django REST Framework',
      'Python',
      'React 18',
      'Redux Toolkit',
      'PostgreSQL',
      'Tailwind CSS',
      'SimpleJWT',
      'Axios Interceptors',
      'Atomic Transactions',
      'REST APIs'
    ],
    documentedModules: [
      'Stateless SimpleJWT Authentication & Protected Routes',
      'Multi-category Product Catalog & Filter Pipeline',
      'Server-Authoritative Persistent Shopping Cart',
      'Atomic Checkout & Automated Stock Decrementation',
      'Historical Price Snapshot Freezing on Orders',
      'Cross-Tenant User Order Isolation & Receipts',
      'Botanical Design System & Responsive UI Layouts',
      'Centralized Redux Slice State & Thunk Architecture'
    ],
    architectureHighlights: [
      'Atomic database transactions (transaction.atomic()) prevent race conditions during inventory deduction',
      'Server-authoritative cart validation guarantees stock integrity against client-side tampering',
      'Historical price freezing preserves exact purchase costs regardless of subsequent catalog updates',
      'Axios request/response interceptors automatically manage token refreshing and session persistence'
    ],
    githubUrl: 'https://github.com/shibinputhramannil/transt-ecommerce',
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
