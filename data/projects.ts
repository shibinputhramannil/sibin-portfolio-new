import { Project } from '@/types';

/** The project lineup, in display order (numbering follows this order). */
export const projects: Project[] = [
  {
    id: 'icorp-erp',
    title: 'ICORP ERP Platform',
    shortTitle: 'IcorpERP',
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
    featured: true,
    // Genuine capture of the running app (local Docker, the app's own seed_demo_data
    // plus three fictional documents uploaded through its UI). Original 2880x1800 PNG
    // kept outside the repo: C:\shibin\screenshots\icorp-erp\dashboard-dark-nexus-global-activity.png
    image: '/images/projects/icorp-erp-dashboard.webp',
    imageAlt:
      'IcorpERP dashboard in dark mode with fictional demo data, showing company, employee and lead counts, the module sidebar, and recent document-upload notifications.',
    imageCaption: 'Screenshot · fictional demo data',
    specs: [
      { label: 'Architecture', value: 'Django REST + PostgreSQL' },
      { label: 'Multi-Tenancy', value: 'Tenant Data Isolation' },
      { label: 'Authentication', value: 'Token / JWT Based' },
      { label: 'API Testing', value: 'Postman Automated Suites' },
      { label: 'AI Capabilities', value: 'Integrated AI Assistant' }
    ],
    specsNote:
      'Production-ready enterprise platform (v1.1.0) with complete modules for Inventory, Sales, Purchasing, Accounting, and Workspace Collaboration.'
  },
  {
    id: 'enterprise-crm',
    title: 'Enterprise CRM Platform',
    shortTitle: 'Enterprise CRM',
    tagline: 'Customer Relationship Management & Automated Sales Pipeline',
    description:
      'A collaborative full-stack CRM built by a six-person team during my Upcode Software Labs internship, featuring lead management, multi-stage sales deals, customer support ticketing, and Twilio-powered direct and bridge voice calling.',
    longDescription:
      'Built as a live team project during my Upcode Software Labs internship, with a React 19/Vite frontend and a Django 6 REST Framework backend. The platform covers company directories, lead capture and qualification, deal stage progression, customer support ticketing, activity timelines with tasks and meeting reminders, and Twilio voice calling (direct and bridge calls) with a simulated fallback mode. Twilio calling was built by other team members; my individual contributions are listed separately.',
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
      'Docker Compose (post-internship)',
      'GitHub Actions CI (post-internship)'
    ],
    documentedModules: [
      'Companies Directory',
      'Leads Management & Qualification Pipeline',
      'Deals Pipeline with Stage Progression Tracking',
      'Customer Support Tickets',
      'Twilio Voice Calling (Direct Call & Bridge Call API)',
      'Activity Timeline, Task Scheduling & Reminders',
      'SimpleJWT Authentication & Admin Permission Checks',
      'GitHub Actions CI (post-internship addition): Django Checks, Frontend Build & Docker Build Validation'
    ],
    architectureHighlights: [
      'Twilio telecommunication integration supporting live calls with resilient simulated mode fallback',
      'Normalized PostgreSQL 17 relational schemas across leads, deals, tickets, and calls',
      'Admin permission checks with JWT token refresh',
      'Containerized multi-service setup with Docker Compose, validated by GitHub Actions builds (added to my copy after the internship)'
    ],
    // Verified against the team repository's commit history (six contributors).
    // Twilio calling was built by other team members and is not listed as a contribution.
    context: 'Team project · Upcode Software Labs internship',
    contributions: [
      'Built the backend activities module: notes and a reusable activity framework shared across CRM records (Django REST Framework).',
      'Completed the companies module: model fields aligned with the frontend, plus Django admin configuration.',
      'Implemented support-ticket features: ticket list, detail panel, edit form, dynamic owner filters and status options in React, plus ticket email-activity integration.',
      'Built the lead profile and activity timeline UI.'
    ],
    // Added after the internship ended, to my personal copy of the codebase only.
    additionalContributions: [
      {
        heading: 'Post-internship additions',
        items: [
          'Containerised my personal copy of the codebase with Docker Compose and added a GitHub Actions CI pipeline (Django checks, frontend build and Docker build validation).'
        ]
      }
    ],
    // No public CRM repository exists on the profile (checked against the GitHub API),
    // so this links to the profile and is labelled as such.
    githubUrl: 'https://github.com/shibinputhramannil',
    githubLinkType: 'profile',
    featured: true
  },
  {
    id: 'byce-gym-app',
    title: 'BYCE Gym App',
    tagline: 'Android gym-membership app prototype for members and gym owners',
    description:
      'A native Android app prototype built with Kotlin and Jetpack Compose, with separate member and gym-owner experiences: gym discovery on a map of Kerala, memberships with QR passes, check-in and visit history for members; attendance, bookings, customers, plans, payments, staff and reports for owners. Screens currently run on mock data through a repository layer; the Django REST Framework backend is a separate project, not yet connected to this app.',
    longDescription:
      'BYCE is a team-built Android app prototype for gym members and gym owners, written in Kotlin with Jetpack Compose and Material 3. Members get onboarding, gym discovery with a map of Kerala gym locations, gym details, membership and check-in screens with QR passes, visit history and a profile. Gym owners get a dashboard and dedicated screens for attendance, bookings, customers, memberships, plans, payments, staff, reports, notifications, an activity log and settings, plus an in-app QR and barcode scanner for fast check-in. All screens currently run on mock data served by a repository layer; no backend is connected yet. The BYCE backend (Django REST Framework and PostgreSQL) is a separate project; its architecture, data model and API contract are documented, and its code is not part of this app.',
    category: 'Mobile',
    status: 'ONGOING',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'CameraX',
      'ML Kit Barcode Scanning',
      'ZXing',
      'Flutter',
      'MapLibre',
      'OpenFreeMap'
    ],
    documentedModules: [
      'Member Onboarding & Sign-in Screens',
      'Gym Discovery with Kerala Location Map & City Filter',
      'Membership Screens with QR Passes',
      'Member Check-in & Visit History',
      'Gym Owner Dashboard',
      'Owner Attendance, Bookings & Customer Management Screens',
      'Owner Plans, Memberships & Payments Screens',
      'Owner Staff, Reports, Notifications & Activity Log',
      'QR & Barcode Check-in Scanner (CameraX + ML Kit)'
    ],
    context: 'Team project',
    contributions: [
      'Built the gym-owner QR and barcode check-in scanner with CameraX and ML Kit barcode scanning.',
      'Added interactive attendance dialogs with member QR passes, and further operational features for the gym-owner dashboard.',
      'Built the gym discovery map of Kerala gym locations with a city filter.',
      'Prototyped a separate Flutter map explorer using MapLibre and OpenFreeMap vector tiles.'
    ],
    // No repository link until the public repository is confirmed to be the current project.
    featured: true
  },
  {
    id: 'transt-ecommerce',
    title: 'TRANST Botanical E-Commerce Platform',
    shortTitle: 'TRANST Store',
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
    shortTitle: 'Face Recognition',
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
    id: 'coreknowledge',
    title: 'CoreKnowledge Enterprise Knowledge Platform',
    shortTitle: 'CoreKnowledge',
    tagline: 'Prototype of an organisational document Q&A platform with cited answers',
    description:
      'A Django REST and React prototype of an organisational knowledge platform: teams upload documents, a Celery task extracts their text (PDF, DOCX, TXT) and splits it into overlapping chunks, and questions are answered with citations to the source sections. Vector search and LLM answer generation are scaffolded but not yet connected; the current build returns sample results.',
    longDescription:
      'CoreKnowledge is a prototype of a multi-tenant knowledge platform where an organisation uploads its documents and team members ask questions answered with citations. The Django REST backend has organisation-scoped users with roles and JWT authentication, document and chunk models with a pgvector embedding field, a Celery ingestion task that extracts text from PDF, DOCX and TXT files and splits it into overlapping chunks, conversation, message and citation models, and query audit logs for analytics. The React and TypeScript frontend covers landing, assistant, documents, search, history, analytics, users and settings pages on a mock data layer. Embedding generation, vector similarity search and LLM answers are scaffolded but not yet connected, so the current build returns sample relevance scores and answers. The full stack runs with Docker Compose (PostgreSQL with pgvector, Redis, Django, Celery and the frontend).',
    category: 'Full Stack',
    status: 'ONGOING',
    technologies: [
      'Django 5',
      'Django REST Framework',
      'SimpleJWT',
      'Celery',
      'Redis',
      'PostgreSQL',
      'pgvector',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'MUI',
      'Docker Compose'
    ],
    documentedModules: [
      'Organisation Multi-tenancy with Roles & JWT Authentication',
      'Document Upload & Celery Ingestion Task',
      'PDF, DOCX & TXT Text Extraction',
      'Overlapping Text Chunking with Section Detection',
      'Conversation, Message & Citation Models',
      'Query Audit Logs & Analytics',
      'Assistant, Documents, Search & Analytics Pages (mock data)'
    ],
    architectureHighlights: [
      'Every document, chunk and query is scoped to an organisation for multi-tenant isolation',
      'Ingestion runs asynchronously in a Celery worker, keeping uploads responsive',
      'Chunk model reserves a 1536-dimension pgvector field for future semantic search'
    ],
    featured: true
  }
];

/** Earlier projects, not shown in the project lineup; kept for reference. */
export const otherProjects: Project[] = [
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
